import React from "react";
import { tabHeaderStyles } from "./tab-header.styles";
import Icon from "@/components/icon/Icon";
import Input from "@/components/input/Input";
import Link from "next/link";

const TabHeader: React.FC = ({}) => {
  return (
    <div className={tabHeaderStyles.wrapperStyle}>
      <div className={tabHeaderStyles.container}>
        <Link href={"/"}>
          <Icon source={"getir"} size={{ width: 60, height: 27 }} />
        </Link>
        <div className={tabHeaderStyles.inputWrapperStyle}>
          <Input
            placeholder="Ürün ara"
            type={"text"}
            icon={"search"}
            iconSize={{ width: 15, height: 15 }}
            className={tabHeaderStyles.inputStyle}
          />
          <div className="flex items-center justify-start">
            <div className="flex bg-white justify-between z-10 items-center p-2 gap-2 rounded-e-full">
              <Icon source={"house"} size={{ width: 22, height: 16 }} />
              <p className="text-grayMid font-bold">Ev</p>
              <Icon
                className=""
                source={"chevron"}
                size={{ width: 12, height: 12 }}
              />
            </div>
            <div className={tabHeaderStyles.TVS}>TVS 15-20 dk</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
