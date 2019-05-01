import React, { Component } from "react";
import Disqus from "disqus-react";
import moment from "moment";

export class ToolkitViewer extends Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    return this.props.steps.map(s => {
      return (
        <div className="row my-3 py-2" key={s.number}>
          <div className="col-md-2">
            <div className="step-num-card my-2">{s.number}</div>
          </div>
          <div className="col-md-9 step-centent">{s.content}</div>
        </div>
      );
    });
  }

  renderEditSection() {
    return (
        <div className={`edit-btn-container`}>
          <div className={`edit-btn-card`}>
            <div className={`question`}>Would you like to contribute to the toolkit? </div>
            <div className={`edit-btn`}>EDIT</div>
          </div>
        </div>
    );
  }

  render() {
    console.log(this.props.steps);
    const disqusShortname = "prax-1";
    const disqusConfig = {
      //url: window.location.href,
      identifier: this.props.toolkit.id,
      title: this.props.toolkit.title
    };
    return (
      <div id="toolkit-view">
        <div className="toolkits-list-header pt-5">
          <h1>{this.props.toolkit.title}</h1>
        </div>
        <div className="container">
          <div className="mx-auto w-50 text-center">
            <div className="text-muted">
              BY {this.props.toolkit.author}
              <span className="mx-2">|</span>
              <span>
                {moment(this.props.toolkit.updated_at)
                  .format("YYYY-MM-DD")
                  .toString()}
              </span>
            </div>
          </div>
          <div className="mx-auto font-weight-light overview">
            <p className="text-secondary">{this.props.toolkit.overview}</p>
          </div>
          <div className="container">{this.renderSteps()}</div>
          <div className={"container"}>{this.renderEditSection()}</div>
          <div className="m-5">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToolkitViewer;
