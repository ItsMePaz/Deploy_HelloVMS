
import "../styles/userManagementResp.css";
import { useState } from "react";
import ShowResultsDateModal from "../modals/ShowResultsDateModal";

function ResultsDateCell() {
  const [show, setShow] = useState(false);
  const [dateVisited, setDateVisited] = useState("");
  const handleSearchByDate = (e) => {
    e.preventDefault();
    setShow(true);
    console.log("name results");
  };
  return (
    <div>
      {show ? (
        <ShowResultsDateModal setShow={setShow} dateVisited={dateVisited} />
      ) : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row">
          <div>
            <strong>RESULTS BY DATE</strong>
          </div>
          <div>
            <form
              id="dateForm"
              onSubmit={handleSearchByDate}
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <input
                className="tw-w-[10rem]  lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                type="text"
                placeholder="Year/Day/Month (e.g: 2023/06/09)"
                name="date"
                value={dateVisited}
                onChange={(e) => setDateVisited(e.target.value)}
                required
              />
            </form>
          </div>

          <button
            className="cellButton tw-w-[9em] tw-bg-black"
            type="submit"
            form="dateForm"
            /*     onClick={() => {
              setShow(true);
            }} */
          >
            SHOW RESULTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsDateCell;
