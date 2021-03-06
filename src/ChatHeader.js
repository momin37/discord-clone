import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./ChatHeader.css";
import { setChannelInfo } from "./features/appSlice";
import { selectUser } from "./features/userSlice";

function ChatHeader({ channelName, channelId }) {
  const user = useSelector(selectUser);
  console.log("slect user", user);

  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input type="text" placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />

        <HelpRounded />
      </div>
    </div>
  );
}

export default ChatHeader;
