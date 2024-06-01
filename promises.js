/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function func1() {
  return 'Hello';
}

async function func2() {
  return 'Bye';
}

console.log('func1', func1());
console.log('func2', func2());

func2().then((val) => {
  console.log('Using the then ', val);
});

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function func3() {
  let val = await func2();
  console.log('func3', val);
}

func3();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function func4() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('func4 done!!! after 1 sec');
    }, 1000);
  });

  let simplePromise = await promise;
  console.log('my promise is ', simplePromise);
}

func4();
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
async function func5() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('func5 done!!! after 1 sec');
    }, 1000);
  }).then((str) => {
    console.log('my promise is ', str);
  });
}

func5();
/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function func6() {
  let newPromise = wait(2000);
  newPromise.then(() => {
    console.log('promise func6 ');
  });
}

func6();

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const func7 = (random) =>
  new Promise((resolve, reject) => {
    if (random < 0.5) {
      resolve('func7 success!!!');
    } else {
      reject('func7 rejected!!!');
    }
  });
for (let i = 1; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
    .then(() => func7(random))
    .then((result) => console.log('random try #', i, result))
    .catch((error) => console.error('random try #', i, error));
}
/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const func8 = async (i) => {
  const random = Math.random();
  await wait(3000, random * 1000);
  try {
    const result = await func7(random);
    console.log('random again #', i, result);
  } catch (error) {
    console.error('random again #', i, error);
  }
};

for (let i = 1; i < 10; i++) {
  func8(i);
}
/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM');
