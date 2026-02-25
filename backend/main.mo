import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Authorization system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form submission type
  type FormSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let formSubmissions = List.empty<FormSubmission>();

  // Anyone (including guests) can submit a contact form inquiry
  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async FormSubmission {
    let newFormSubmission : FormSubmission = {
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };

    formSubmissions.add(newFormSubmission);
    newFormSubmission;
  };

  // Only admins can view all inquiries
  public shared ({ caller }) func getAllInquiries() : async [FormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all form submissions");
    };
    formSubmissions.toArray();
  };
};
