import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Invoice</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print Invoice
          </Button>
          <Button className="!box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>
      <div className="mt-5 box">
        <div className="flex flex-col px-5 pt-10 text-center lg:flex-row sm:px-20 sm:pt-20 lg:pb-20 sm:text-left">
          <div className="text-3xl font-semibold text-primary">INVOICE</div>
          <div className="mt-20 lg:mt-0 lg:ml-auto lg:text-right">
            <div className="text-xl font-medium text-primary">INV-1923195</div>
            <div className="mt-1">Due date: Mar 26, 2022</div>
          </div>
        </div>
        <div className="flex flex-col px-5 pt-10 pb-10 lg:flex-row sm:px-20 sm:pb-20">
          <div>
            <div className="text-base text-slate-500">From</div>
            <div className="mt-2 text-lg font-medium text-primary">
              Left4code
            </div>
            <div className="mt-1">left4code@gmail.com</div>
            <div className="mt-1">8023 Amerige Street Harriman, NY 10926.</div>
          </div>
          <div className="mt-10 lg:text-right lg:mt-0 lg:ml-auto">
            <div className="text-base text-slate-500">Billed to</div>
            <div className="mt-2 text-lg font-medium text-primary">
              Arnold Schwarzenegger
            </div>
            <div className="mt-1">arnodlschwarzenegger@gmail.com</div>
            <div className="mt-1">260 W. Storm Street New York, NY 10025.</div>
          </div>
        </div>
        <div className="px-5 py-10 sm:px-16 sm:py-20">
          <div className="overflow-x-auto">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th className="border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    DESCRIPTION
                  </Table.Th>
                  <Table.Th className="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    QTY
                  </Table.Th>
                  <Table.Th className="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    PRICE
                  </Table.Th>
                  <Table.Th className="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    SUBTOTAL
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      Rocketman Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    2
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    $2,500.00
                  </Table.Td>
                  <Table.Td className="w-32 font-medium text-right border-b dark:border-darkmode-400">
                    $5,000.00
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      Vuejs Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    1
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    $2,145.11
                  </Table.Td>
                  <Table.Td className="w-32 font-medium text-right border-b dark:border-darkmode-400">
                    $2,145.11
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      React Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    1
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    $2,145.11
                  </Table.Td>
                  <Table.Td className="w-32 font-medium text-right border-b dark:border-darkmode-400">
                    $2,145.11
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <div className="font-medium whitespace-nowrap">
                      Laravel Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right">3</Table.Td>
                  <Table.Td className="w-32 text-right">$2,145.11</Table.Td>
                  <Table.Td className="w-32 font-medium text-right">
                    $6,435.33
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td
                    colSpan={3}
                    className="!pt-6 border-transparent dark:!border-transparent text-right font-medium w-32"
                  >
                    TOTAL
                  </Table.Td>
                  <Table.Td className="!pt-6 border-transparent dark:!border-transparent text-right font-medium w-32">
                    $15,725.55
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td
                    colSpan={3}
                    className="border-transparent dark:!border-transparent text-right font-medium w-32"
                  >
                    DISCOUNT
                  </Table.Td>
                  <Table.Td className="border-transparent dark:!border-transparent text-right font-medium w-32">
                    $725
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td
                    colSpan={3}
                    className="border-transparent dark:!border-transparent font-medium text-right w-32"
                  >
                    GRAND TOTAL
                  </Table.Td>
                  <Table.Td className="border-transparent dark:!border-transparent text-right w-32 font-medium">
                    $15,000.55
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </div>
        </div>
        <div className="pt-8 pb-16 mx-5 mt-20 border-t sm:mx-16 border-slate-200/60">
          Thanks for buying from{" "}
          <a href="" className="text-primary">
            Left4code
          </a>{" "}
          All amounts shown on this invoice are in US dollars.
        </div>
      </div>
    </>
  );
}

export default Main;
