function set_info() {
  let user_name = prompt("Set a username:- ");
  let password = prompt("Set your Password:- ");
  return { user_name, password };
}

function check_input(saved_info, entered_info) {
  if (
    saved_info.user_name === entered_info.user_name &&
    saved_info.password === saved_info.password
  ) {
    alert("User logged in successfully");
  } else {
    alert("Username or password incorrect");
  }
}

function input_info(clbk_set, clbk_take, clbk_check) {
  const saved_info = clbk_set();
  const entered_info = clbk_take();
  clbk_check(saved_info, entered_info);
}

function take_info() {
  let user_name = prompt("Enter your username:- ");
  let password = prompt("Enter your Password:- ");

  return { user_name, password };
}

input_info(set_info, take_info, check_input);
