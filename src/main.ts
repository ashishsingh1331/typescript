// This feature of TS is useful when we have a type properties with multiple values and other properties
// is dependent on the value of another
// For. eg. sucess are error response

type SuccessResponse = {
  status: "Success";
  data: { id: string; name: string };
};

type ErrorResponse = {
  status: "Error";
  errorMessage: "There is erro";
};

type UserApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: UserApiResponse) {
  if (response.status == "Success") {
    console.log(response.data.name);
  } else {
    console.log(response.errorMessage);
  }
}
