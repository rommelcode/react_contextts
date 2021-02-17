import * as React from "react";

interface IData {
  name: string;
  address: string;
  suburb: string;
}

const myContext = React.createContext<IData>({
  name: "Dik",
  address: "Pielstraat",
  suburb: "Kuthoertown"
});

export ContProvider :FC<IData> = ({name}) => {
  <div>{name}</div>
}
