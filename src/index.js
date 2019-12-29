import "./styles.css";

// fetching data from API.
(async () => {
  console.log("fetching started");
  const responseProductDataList = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  // console.log(responseProductDataList);
  const itemList = await responseProductDataList.json();
  // console.log(itemList[1]);
  localStorage.setItem("productItems", JSON.stringify(itemList));
})();

// settting displaying 8 item on the UI as default.
let currentItemIndex = 0;
let nextListItem = nextIndex => {
  let localStorageProductItem = localStorage.getItem("productItems");
  localStorageProductItem = JSON.parse(localStorageProductItem);
  let currentProductItem = localStorageProductItem.slice(
    nextIndex,
    nextIndex + 8
  );

  for (var item in currentProductItem) {
    console.log(currentProductItem[item].id);
  }
  // console.log(dat);
  // console.log(localStorageProductItem);
};

nextListItem(currentItemIndex);
