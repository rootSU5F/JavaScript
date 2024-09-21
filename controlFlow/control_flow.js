let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "administrator";
    break;
  case "manager":
    userCategory = "userManeger";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "unknown";
    break;
}

if (isLoggedIn) {
  if (userRole === "admin") userMessage = "welcome admin";
  else userMessage = "welcome user ! ";
} else userMessage = "there is error with ur loggining ";

if (userRole === "admin") accessLevel = "Full access granted";
else if (userRole === "manager") accessLevel = "Limited access granted";
else accessLevel = "No access granted";
console.log("access level " + accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
