import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Main} from "./main";
import {AuthorizationStatus} from "../../const";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              currentCityOffers={[]}
              currentSortedCityOffers={[]}
              currentCityName={`City1`}
              userEMail={`user@mail.com`}
              userAvatar={`avatar-url`}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
