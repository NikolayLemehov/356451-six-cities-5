import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites";
import {AuthorizationStatus} from "../../const";

it(`Favorites should render correctly`, () => {
  const tree = renderer
    .create(<Favorites
      bookmarkOffersByCity={``}
      userEMail={`user@mail.com`}
      userAvatar={`url-user-avatar`}
      authorizationStatus={AuthorizationStatus.AUTH}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
