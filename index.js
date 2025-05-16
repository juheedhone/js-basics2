let role;

switch (role) {
  case "guest":
    console.log("guest user");
    break;

  case "moderated":
    console.log("moderated user");
    break;

  default:
    console.log("unknown user");
}

// if (role === "guest") console.log("guest user");
// else if (role === "moderated") console.log("moderated user");
// else console.log("unknown user");
