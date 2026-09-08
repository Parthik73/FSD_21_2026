function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error in f1");
    }, 1000);
  });
}

function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done in f2");
    }, 1000);
  });
}

function f() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

async function test() {
  try {
    await f1();
    await f2();
  } catch (err) {
    console.log("Error", err);
  }
}
test();
