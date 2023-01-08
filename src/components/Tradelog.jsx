import React from "react";

const data = [
  {
    userId: 1,
    firstName: "Cort",
    lastName: "Tosh",
    emailAddress: "ctosh0@github.com",
    level: "300",
    matricNumber: "327-626-5542",
  },
  {
    userId: 2,
    firstName: "Brianne",
    lastName: "Dzeniskevich",
    emailAddress: "bdzeniskevich1@hostgator.com",
    level: "300",
    matricNumber: "144-190-8956",
  },
  {
    userId: 3,
    firstName: "Isadore",
    lastName: "Botler",
    emailAddress: "ibotler2@gmpg.org",
    level: "300",
    matricNumber: "350-937-0792",
  },
  {
    userId: 4,
    firstName: "Janaya",
    lastName: "Klosges",
    emailAddress: "jklosges3@amazon.de",
    level: "300",
    matricNumber: "502-438-7799",
  },
  {
    userId: 5,
    firstName: "Freddi",
    lastName: "Di Claudio",
    emailAddress: "fdiclaudio4@phoca.cz",
    level: "300",
    matricNumber: "265-448-9627",
  },
  {
    userId: 6,
    firstName: "Oliy",
    lastName: "Mairs",
    emailAddress: "omairs5@fda.gov",
    level: "300",
    matricNumber: "221-516-2295",
  },
  {
    userId: 7,
    firstName: "Tabb",
    lastName: "Wiseman",
    emailAddress: "twiseman6@friendfeed.com",
    level: "300",
    matricNumber: "171-817-5020",
  },
  {
    userId: 8,
    firstName: "Joela",
    lastName: "Betteriss",
    emailAddress: "jbetteriss7@msu.edu",
    level: "300",
    matricNumber: "481-100-9345",
  },
  {
    userId: 9,
    firstName: "Alistair",
    lastName: "Vasyagin",
    emailAddress: "avasyagin8@gnu.org",
    level: "300",
    matricNumber: "520-669-8364",
  },
];
console.log(data);
const Tradelog = () => {
  return (
    <div>
      {/* <div class="grid grid-col-1 items-center justify-center p-2 xl:grid-cols-2 lg:grid-cols-2 bg-white rounded-md h-[405px]"> */}
      <div className="flex bg-white px-6">
        <div class="font-bold tracking-wider uppercase text-xs px- py-2">ttttrgfd</div>
    </div>
      <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto h-[300px]">
      <div className="flex bg-white px-6">
        <div class="font-bold tracking-wider uppercase text-xs px- py-2">ttttrgfd</div>
        <div class="font-bold tracking-wider uppercase text-xs px-14 py-2">ttttrgfd</div>
        <div class="px-14 py-2 font-bold tracking-wider uppercase text-xs ">ttttrgfd</div>
      </div>
        {data.map(
          ({
            userId,
            firstName,
            lastName,
            emailAddress,
            matricNumber,
            level,
          }) => {
            return (
              <table class="border-collapse  table-auto w-full whitespace-wrap bg-white ">

                <tbody>
                  <tr>
                    <td class="border-dashed border-t border-gray-200 ">
                      <span class="text-gray-700 text-left  px-6 flex items-center">
                        {firstName}
                      </span>
                    </td>
                    <td class="border-dashed border-t border-gray-200">
                      <span class="text-gray-700 px-6 py-3 text-left  flex items-center">
                        {lastName}
                      </span>
                    </td>

                    <td class="border-dashed border-t border-gray-200">
                      <span class="text-gray-700 px-6 py-3 flex items-center">
                        {matricNumber}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          }
        )}
      </div>
    </div>
    // </div>
  );
};

export default Tradelog;
