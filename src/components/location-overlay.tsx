import { useGlobalContext } from "@/context/context";
import { useEffect } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

export default function LocationOverlay() {
  const { setLocation, setShowOverlay, showOverlay, location } =
    useGlobalContext();

  function handleAllowAccess() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const res = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=pk.fd80d16f37a4abd1f0c95a022752918b&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&`,
          );

          if (!res.ok) {
            throw new Error();
          }

          const data = await res.json();

          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            town: data.address.town || data.display_name.split(",")[0],
          });
          setShowOverlay(false);
        },
        (error) => {
          let errorMessage =
            "An unknown error occurred while getting your location";

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access was denied by the user";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out";
              break;
          }

          alert(errorMessage);
        },
      );
    }
  }

  useEffect(() => {
    if (!location.latitude && !location.longitude) {
      setShowOverlay(true);
    }
  }, [setShowOverlay, location]);

  return (
    <Dialog open={showOverlay}>
      <DialogContent className="flex max-h-[95vh] flex-col rounded-3xl p-10 md:w-[568px]">
        <img src={"/overlay-image.png"} alt="overlay" className="mx-auto" />
        <div className="space-y-2">
          <h5 className="text-center text-lg font-semibold text-[#282828] md:text-2xl">
            Allow Waakye to access your location
          </h5>
          <p className="text-center text-sm text-[#4D4D4D] md:text-base">
            To give you the best recommendations nearby, we need to know your
            location. Don’t worry, your privacy is our priority, and we’ll only
            use it to find great places around you
          </p>
        </div>

        <div className="w-full space-y-2 font-medium">
          <button
            className="w-full cursor-pointer rounded-[12px] bg-[#F06225] px-6 py-4 text-black text-white"
            onClick={handleAllowAccess}
          >
            Enable location access
          </button>

          <button
            className="w-full px-6 py-4 text-[#4A4A4A]"
            onClick={() => setShowOverlay(false)}
          >
            Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
