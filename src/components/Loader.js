import React from "react";
import {Loader, Segment, Dimmer } from "semantic-ui-react";


const LoaderUI = () => (
    <div>
      <Segment>
        <Dimmer active>
          <Loader></Loader>
        </Dimmer>
      </Segment>
    </div>
  )

  export default () => (<div><LoaderUI/></div>)