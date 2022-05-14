import { useRouter } from "next/router";
import Js from "../../../layouts/js";

export default function Payment() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <style jsx>
        {`
          body {
            margin-top: 20px;
            background: #eee;
          }

          .invoice {
            background: #fff;
            padding: 20px;
          }

          .invoice-company {
            font-size: 20px;
          }

          .invoice-header {
            margin: 0 -20px;
            background: #f0f3f4;
            padding: 20px;
          }

          .invoice-date,
          .invoice-from,
          .invoice-to {
            display: table-cell;
            width: 1%;
          }

          .invoice-from,
          .invoice-to {
            padding-right: 20px;
          }

          .invoice-date .date,
          .invoice-from strong,
          .invoice-to strong {
            font-size: 16px;
            font-weight: 600;
          }

          .invoice-date {
            text-align: right;
            padding-left: 20px;
          }

          .invoice-price {
            background: #f0f3f4;
            display: table;
            width: 100%;
          }

          .invoice-price .invoice-price-left,
          .invoice-price .invoice-price-right {
            display: table-cell;
            padding: 20px;
            font-size: 20px;
            font-weight: 600;
            width: 75%;
            position: relative;
            vertical-align: middle;
          }

          .invoice-price .invoice-price-left .sub-price {
            display: table-cell;
            vertical-align: middle;
            padding: 0 20px;
          }

          .invoice-price small {
            font-size: 12px;
            font-weight: 400;
            display: block;
          }

          .invoice-price .invoice-price-row {
            display: table;
            float: left;
          }

          .invoice-price .invoice-price-right {
            width: 25%;
            background: #2d353c;
            color: #fff;
            font-size: 28px;
            text-align: right;
            vertical-align: bottom;
            font-weight: 300;
          }

          .invoice-price .invoice-price-right small {
            display: block;
            opacity: 0.6;
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 12px;
          }

          .invoice-footer {
            border-top: 1px solid #ddd;
            padding-top: 10px;
            font-size: 10px;
          }

          .invoice-note {
            color: #999;
            margin-top: 80px;
            font-size: 85%;
          }

          .invoice > div:not(.invoice-footer) {
            margin-bottom: 20px;
          }

          .btn.btn-white,
          .btn.btn-white.disabled,
          .btn.btn-white.disabled:focus,
          .btn.btn-white.disabled:hover,
          .btn.btn-white[disabled],
          .btn.btn-white[disabled]:focus,
          .btn.btn-white[disabled]:hover {
            color: #2d353c;
            background: #fff;
            border-color: #d9dfe3;
          }
        `}
      </style>
      {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
      <div className="container">
        <div className="col-md-12">
          <div className="invoice">
            {/* <!-- begin invoice-company --> */}
            <div className="invoice-company text-inverse f-w-600">
              <span className="pull-right hidden-print"></span>
              Company Name, Inc
            </div>
            {/* <!-- end invoice-company --> */}
            {/* <!-- begin invoice-header --> */}
            <div className="invoice-header">
              <div className="invoice-from">
                <small>from</small>
                <address className="m-t-5 m-b-5">
                  <strong className="text-inverse">Twitter, Inc.</strong>
                  <br />
                  Street Address
                  <br />
                  City, Zip Code
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Fax: (123) 456-7890
                </address>
              </div>
              <div className="invoice-to">
                <small>to</small>
                <address className="m-t-5 m-b-5">
                  <strong className="text-inverse">Company Name</strong>
                  <br />
                  Street Address
                  <br />
                  City, Zip Code
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Fax: (123) 456-7890
                </address>
              </div>
              <div className="invoice-date">
                <small>Invoice / July period</small>
                <div className="date text-inverse m-t-5">August 3,2012</div>
                <div className="invoice-detail">
                  #0000123DSS
                  <br />
                  Services Product
                </div>
              </div>
            </div>
            {/* <!-- end invoice-header --> */}
            {/* <!-- begin invoice-content --> */}
            <div className="invoice-content">
              {/* <!-- begin table-responsive --> */}
              <div className="table-responsive">
                <table className="table table-invoice">
                  <thead>
                    <tr>
                      <th>TASK DESCRIPTION</th>
                      <th className="text-center" width="10%">
                        RATE
                      </th>
                      <th className="text-center" width="10%">
                        HOURS
                      </th>
                      <th className="text-right" width="20%">
                        LINE TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-inverse">
                          Website design development
                        </span>
                        <br />
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed id sagittis arcu.
                        </small>
                      </td>
                      <td className="text-center">$50.00</td>
                      <td className="text-center">50</td>
                      <td className="text-right">$2,500.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-inverse">Branding</span>
                        <br />
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed id sagittis arcu.
                        </small>
                      </td>
                      <td className="text-center">$50.00</td>
                      <td className="text-center">40</td>
                      <td className="text-right">$2,000.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-inverse">Redesign Service</span>
                        <br />
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed id sagittis arcu.
                        </small>
                      </td>
                      <td className="text-center">$50.00</td>
                      <td className="text-center">50</td>
                      <td className="text-right">$2,500.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- end table-responsive --> */}
              {/* <!-- begin invoice-price --> */}
              <div className="invoice-price">
                <div className="invoice-price-left">
                  <div className="invoice-price-row">
                    <div className="sub-price">
                      <small>SUBTOTAL</small>
                      <span className="text-inverse">$4,500.00</span>
                    </div>
                    <div className="sub-price">
                      <i className="fa fa-plus text-muted"></i>
                    </div>
                    <div className="sub-price">
                      <small>PAYPAL FEE (5.4%)</small>
                      <span className="text-inverse">$108.00</span>
                    </div>
                  </div>
                </div>
                <div className="invoice-price-right">
                  <small>TOTAL</small> <span className="f-w-600">$4508.00</span>
                </div>
              </div>
              {/* <!-- end invoice-price --> */}
            </div>
            {/* <!-- end invoice-content --> */}
            {/* <!-- begin invoice-note --> */}
            <div className="invoice-note">
              * Make all cheques payable to [Your Company Name]
              <br />
              * Payment is due within 30 days
              <br />* If you have any questions concerning this invoice, contact
              [Name, Phone Number, Email]
            </div>
            {/* <!-- end invoice-note --> */}
            {/* <!-- begin invoice-footer --> */}
            <div className="invoice-footer">
              <p className="text-center m-b-5 f-w-600">
                THANK YOU FOR YOUR BUSINESS
              </p>
              <p className="text-center">
                <span className="m-r-10">
                  <i className="fa fa-fw fa-lg fa-globe"></i>{" "}
                  matiasgallipoli.com
                </span>
                <span className="m-r-10">
                  <i className="fa fa-fw fa-lg fa-phone-volume"></i>{" "}
                  T:016-18192302
                </span>
                <span className="m-r-10">
                  <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                  rtiemps@gmail.com
                </span>
              </p>
            </div>
            {/* <!-- end invoice-footer --> */}
          </div>
        </div>
      </div>
      <Js />
    </>
  );
}
