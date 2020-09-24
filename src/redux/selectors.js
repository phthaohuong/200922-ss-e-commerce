import * as R from "ramda";

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
  // Search by names, but cannot search lowercase?
  const applySearch = (item) =>
    R.contains(state.phonesPage.search, R.prop("name", item));

  // R.Compose, run from RTL-function
  const phones = R.compose(
    R.filter(applySearch),
    R.map((id) => getPhoneById(state, id))
  )(state.phonesPage.ids);
  return phones;

  // const phones = R.map((id) => getPhoneById(state, id), state.phonesPage.ids);
  // return phones;
};

export const getRenderedPhonesLength = (state) => {
  R.length(state.phonesPage.ids);
  // state.phonesPage.ids return arr has length = 6
  // console.log(state.phonesPage.ids);
};

// Lấy length id có trong basket
export const getTotalBasketCount = (state) => R.length(state.basket);

export const getTotalBasketPrice = (state) => {
  const totalPrice = R.compose(
    //Sau đó sum all
    R.sum,
    // Chỉ lụm ra cái giá của object phone
    R.pluck("price"),
    // Cứ mỗi id lụm ra được 1 phone
    R.map((id) => getPhoneById(state, id))
  )(state.basket);
  return totalPrice;
};
