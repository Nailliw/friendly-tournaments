import NavBar from '../global/navigationBar/index'
import { render, screen } from "@testing-library/react";

describe("When everything is ok", () => {
    test("Should title appear", async () => {
      render(
        <NavBar/>
      );
      
    });
});


