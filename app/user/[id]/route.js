import { validateEmail, validatePhone } from "@/app/utils";
import { NextResponse } from "next/server";

const Users = [
  {
    id: "1",
    Name: "Ho Tan Loc",
    Email: "hotanloc2001@gmail.com",
    Phone: "6593280137",
  },
  {
    id: "2",
    Name: "Nguyen Van A",
    Email: "nguyenvana@gmail.com",
    Phone: "6513413423",
  },
  {
    id: "3",
    Name: "Tran Van B",
    Email: "tranvanb@gmail.com",
    Phone: "6587419520",
  },
  {
    id: "4",
    Name: "Nguyen Van C",
    Email: "nguyenvanc@gmail.com",
    Phone: "6556478392",
  },
  {
    id: "5",
    Name: "Nguyen Van D",
    Email: "nguyenvand@gmail.com",
    Phone: "6509876543",
  },
  {
    id: "6",
    Name: "Phan Van F",
    Email: "phanvanf@gmail.com",
    Phone: "6581064939",
  },
  {
    id: "7",
    Name: "Ho Le Van J",
    Email: "holevanj@gmail.com",
    Phone: "6553838563",
  },
  {
    id: "8",
    Name: "Pham Van O",
    Email: "phamvano@gmail.com",
    Phone: "6586739281",
  },
  {
    id: "9",
    Name: "Hoang Thi L",
    Email: "hoangthil@gmail.com",
    Phone: "6502736472",
  },
  {
    id: "10",
    Name: "Nguyen Thi M",
    Email: "nguyenthim@gmail.com",
    Phone: "6564839747",
  },
];

export async function GET(request, { params }) {
  const id = params.id;
  const infoUser = Users.find((user) => {
    return id === user.id;
  });
  if (infoUser) {
    return NextResponse.json({ infoUser });
  } else {
    return NextResponse.json({ statusCode: 404, msg: `${id} doesn't exist` });
  }
}

export async function PUT(request, { params }) {
  const id = params.id;
  let { Name, Email, Phone } = await request.json();
  let errValidate = validatePhone(Phone) && validateEmail(Email);

  if (errValidate) {
    const infoUser = Users.find((user) => {
      if (id === user.id) {
        user.Name = Name;
        user.Email = Email;
        user.Phone = Phone;
      }

      return id === user.id;
    });

    if (infoUser) {
      return NextResponse.json({ infoUser });
    } else {
      return NextResponse.json({ msg: `${id} doesn't exist` });
    }
  } else {
    return NextResponse.json({
      statusCode: 400,
      msg: `Data must be an Phone or Email`,
    });
  }
}
