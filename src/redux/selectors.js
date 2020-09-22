import * as R from "ramda";

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
  <div>
    const phones = R.map((id) => getPhoneById(state, id), state.phonesPage.ids);
    return phones;
  </div>;
};
