import React from "react";
import { Collapse, Divider } from "antd";
const firstQuestion = `Can I really go solar for little to $0 down`;
const firstAnswer = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const secondQuestion = `Is my home good for solar?`;
const secondAnswer = `Figuring out if your home is good for solar relies on several factors, like where your house is located, the angle of your roof, roof shading, and how old your home is.
In order to understand if your home is suitable for solar, get in touch with one of our Solar Advisors. They’ll run a personalized analysis of your home with BrightPath™, our proprietary solar design technology. We’ll only recommend solar if it’s the right fit for your home energy needs.`;
const thirdQuestion = `How much can I expect to save when I go solar`;
const thirdAnswer = `When you sign up for a free quote, our in-house Solar Advisors will work with you to determine how much you can expect to save on your monthly energy bill. This relies on factors like your utility, how much electricity you use and how much sunlight your home gets. We’ll only recommend solar if it’s the right fit for your home energy needs and profile.`;
const Faqs = () => (
  <>
    <div className="container-fluid bg-light mb-5 mt-5">
      <div className="row">
        <div className="col-12">
          <Collapse
            size="large"
            classNsme="mt-3 py-3"
            style={{ border: "0px", background: "#fff", borderRadius: "0px" }}
            items={[
              {
                key: "1",
                label: <h4>{firstQuestion}</h4>,
                children: <p>{firstAnswer}</p>,
              },
            ]}
          />
          <Collapse
            size="large"
            classNsme="mt-3 py-3"
            style={{ border: "0px", background: "#fff", borderRadius: "0px" }}
            items={[
              {
                key: "1",
                label: <h4>{secondQuestion}</h4>,
                children: <p>{secondAnswer}</p>,
              },
            ]}
          />
          <Collapse
            size="large"
            classNsme="mt-3 py-3"
            style={{ border: "0px", background: "#fff", borderRadius: "0px" }}
            items={[
              {
                key: "1",
                label: <h4>{thirdQuestion}</h4>,
                children: <p>{thirdAnswer}</p>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  </>
);
export default Faqs;
