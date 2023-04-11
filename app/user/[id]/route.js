import { NextResponse } from "next/server";

const usersData = {
  1: {
    Name: "Ho Tan Loc",
    Email: "hotanloc2001@gmail.com",
    Phone: "6593280137",
  },
  2: {
    Name: "Nguyen Van A",
    Email: "nguyenvana@gmail.com",
    Phone: "6513413423",
  },
  3: {
    Name: "Tran Van B",
    Email: "tranvanb@gmail.com",
    Phone: "6587419520",
  },
  4: {
    Name: "Le Van C",
    Email: "levanc@gmail.com",
    Phone: "6556478392",
  },
  5: {
    Name: "Ly Van D",
    Email: "lyvand@gmail.com",
    Phone: "6509876543",
  },
  6: {
    Name: "Phan Van F",
    Email: "phanvanf@gmail.com",
    Phone: "6581064939",
  },
  7: {
    Name: "Ho Van J",
    Email: "hovanj@gmail.com",
    Phone: "6553838563",
  },
  8: {
    Name: "Pham Van O",
    Email: "phamvano@gmail.com",
    Phone: "6586739281",
  },
  9: {
    Name: "Hoang Thi L",
    Email: "hoangthil@gmail.com",
    Phone: "6502736472",
  },
  7: {
    Name: "Nguyen Thi M",
    Email: "nguyenthim@gmail.com",
    Phone: "6564839747",
  },
};

export async function GET(request, { params }) {
  const id = params.id;
  const infoUser = usersData[id];
  if (infoUser) {
    return NextResponse.json({ id, ...infoUser });
  } else {
    return NextResponse.json({ msg: `${id} doesn't exist` });
  }
}
