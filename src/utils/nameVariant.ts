export const nameVariant = (currentName:string) => {
    if (currentName === "Build") {
      return "text-corered"
    } else if (currentName === "Design") {
      return "text-yellow-600"
    } else if (currentName === "Create") {
      return "text-blue-600"
    } else {
      return "text-green-600"
    }
  };