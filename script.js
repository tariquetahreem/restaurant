const cardList = document.querySelector(".itemlist");

const fetchData = async () => {
  let food;
  try {
    const value = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    food = await value.json();
  } catch (error) {
    console.log("Error in Featching Data");
  }
  return food;
};
// getMenu()

const getMenu = async () => {
  let data = await fetchData();
  if (data?.length) {
    data.map((list) => {
      return (cardList.innerHTML += `
    <div class="card" key=${list.id}>
          <img src=${list.imgSrc} />
          <div class="value">
            <div class="detail">
              <p>${list.name}</p>
              <p>$ ${list.price}</p>
            </div>
            <div class="btn">
              <img src="Group 4.png" alt="" srcset="" />
            </div>
          </div>
        </div>
    `);
    });
  }
  TakeOrder(data);
};
getMenu();

//TakeOrder

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

const TakeOrder = async (food) => {
  let array = [];

  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(getMultipleRandom(food, 3));
    }, 2500);
  })
    .then((value) => {
      array = value;
      console.log("Taking a Order -> ", array);
      orderPrep();
    })
    .catch(() => {
      console.log("Error in taking Order");
    });
};

// orderPrep

const orderPrep = async () => {
  let obj = {
    order_status: Boolean,
    paid: Boolean,
  };

  await new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve((obj.order_status = true), (obj.paid = false));
    }, 1500);
  })
    .then(() => {
      console.log("Order Status True", obj);

      payOrder();
    })
    .catch(() => {
      console.log("Order is waiting For your Conformation");
    });
  return obj;
};

//payOrder

const payOrder = () => {
  let obj = {
    order_status: Boolean,
    paid: Boolean,
  };

  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve((obj.order_status = true), (obj.paid = true));
    }, 1000);
  })
    .then(() => {
      console.log("Payment Successfully completed", obj);

      thankyouFnc();
    })
    .catch(() => {
      console.log("Payment Failed");
    });
};

// thankyouFnc

const thankyouFnc = async () => {
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
    .then(() => {
      alert("Thank You, Your Order Is Successfully placed");
      console.log("Order Is Successfully Completed");
    })
    .catch((err) => {
      console.log(err);
    });
};
