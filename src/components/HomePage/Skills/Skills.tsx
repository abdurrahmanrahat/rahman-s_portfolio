const Skills = () => {
  return (
    <div className="mx-[5.1%] md:mx-[10.2%] mt-[80px] md:mt-0">
      <div className="text-center">
        <span className="text-[20px] font-semibold uppercase border-b-2 border-primary">
          Skills
        </span>
      </div>

      {/* skills show */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-x-[80px] mt-[40px]">
        {/* one */}
        <div>
          <h2 className="text-[18px] font-bold text-text text-center mb-[8px]">
            Frontend
          </h2>

          <div className="space-y-[8px]">
            <div>
              <p className="-mb-2 text-text-gray">React.js</p>
              <progress
                className="progress text-[#FB923C]"
                value="92"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="-mb-2 text-text-gray">Redux</p>
              <progress
                className="progress text-[#FB923C]"
                value="88"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="-mb-2 text-text-gray">Next.js</p>
              <progress
                className="progress text-[#FB923C]"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        {/* two */}
        <div>
          <h2 className="text-[18px] font-bold text-text text-center mb-[8px]">
            Database
          </h2>

          <div className="space-y-[8px]">
            <div>
              <p className="-mb-2 text-text-gray">NoSQL</p>
              <progress
                className="progress text-[#FB923C]"
                value="92"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="-mb-2 text-text-gray">Mongoose</p>
              <progress
                className="progress text-[#FB923C]"
                value="88"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="-mb-2 text-text-gray">Mongodb</p>
              <progress
                className="progress text-[#FB923C]"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        {/* three */}
        <div>
          <h2 className="text-[18px] font-bold text-text text-center mb-[8px]">
            Backed
          </h2>

          <div className="space-y-[8px]">
            <div>
              <p className="-mb-2 text-text-gray">Node.js</p>
              <progress
                className="progress text-[#FB923C]"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="-mb-2 text-text-gray">Express.js</p>
              <progress
                className="progress text-[#FB923C]"
                value="88"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        {/* four */}
        <div>
          <h2 className="text-[18px] font-bold text-text text-center mb-[8px]">
            Languages
          </h2>

          <div className="space-y-[8px]">
            <div>
              <p className="-mb-2 text-text-gray">JavaScript</p>
              <progress
                className="progress text-[#FB923C]"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="-mb-2 text-text-gray">TypeScript</p>
              <progress
                className="progress text-[#FB923C]"
                value="84"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
