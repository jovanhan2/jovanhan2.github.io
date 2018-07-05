import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import experienceStyle from "assets/jss/material-kit-react/views/componentsSections/experienceStyle.jsx";
import GridItem from "../../../components/Grid/GridItem";

import deutsche from "assets/img/Deutsche.png"
class SectionExperience extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h1>Experience</h1>
            </div>
            <GridContainer >
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <div className={classes.typo}>
                  <div className={classes.note}>
                  <a href="https://www.db.com/unitedkingdom/" target="_blank" rel="noopener noreferrer" title="Github">
                      <img
                        src={deutsche}
                        alt="First slide"
                        style={{height:"4%",width:"4%", position:"relative",bottom:"3px",paddingRight:"5px"}}
                        className="slick-image"
                      />
                    </a>
                  <b>Deutsche Bank </b>| Software developer Intern | June 2017 - August 2017
                  
                  </div>
             
                  <div className={classes.text}>
                  <hr />
                    <h3><b>Buisness Case </b></h3>
                    <p>Developed a (Java) web application to automate SQL queries which were manually changed every day in the backend, after which the results were copied and pasted into a SharePoint document - taking up to 2 hours
                  every day.<br />  With the application, the process was <b>12 times faster</b> - taking up to <i>10 minutes</i>  for the same task.</p>
                    <h3><b>Overall Impression</b></h3>
                    <p>
                      As someone who had limited Java experience before undertaking the project, I thoroughly enjoyed learning new technologies and the experience of delivering a solution in a work place setting.
                    <br />I was particularly impressed with <b>SonarQube</b>, which is an industry standard tool for quality assurance. It ensures your code is clean - for example making sure there are no unhandled exceptions and also gives a hard statistical number on your code coverage from testing. </p>
                    <h3><b> Technologies</b></h3>
                    <div className={classes.iconSize}>
                      <svg viewBox="0 0 128 128" width="10%" height="10%">
                        <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
                      </svg>
                      <svg viewBox="0 0 128 128" width="10%" height="10%" >
                        <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z"></path><path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
                      </svg>
                      <svg viewBox="0 0 128 128" width="10%" height="10%">
                        <path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path>
                      </svg>
                      <svg viewBox="0 0 128 128"width="10%" height="10%">
                        <path fill="#5B4282" d="M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024h-5.001v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zM34.252 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM49.161 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM57.09 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM70.671 122.245c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107-.409-.354-.735-.765-.979-1.234-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613-.467-.116-.925-.174-1.376-.174-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zM78.254 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM86.778 120.827v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826h-3.146l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zM104.494 125.958l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561c-.896-2.884-1.401-4.515-1.514-4.893-.113-.378-.193-.677-.242-.896-.201.78-.777 2.71-1.729 5.789h3.485zM118.469 116.757c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122h.933c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zM73.951 56.759c-1.983-.653-4.838-.759-8.565-.759h-13.386v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zM71.895 48.147c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809h-11.549v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126c0-7.802-6.325-14.126-14.127-14.126h-77.746c-7.802 0-14.127 6.324-14.127 14.126v77.748c0 7.802 6.325 14.126 14.127 14.126h77.746c7.802 0 14.127-6.324 14.127-14.126v-77.748zm-30.43 57.144c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098-2.569.653-5.717 1.181-9.444 1.181h-22.424v-59h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"></path>
                      </svg>
                      <svg viewBox="0 0 128 128" width="10%" height="10%">
                        <path fill="#31251C" d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zM98.983 46.786c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997v-14.627c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929h-14.182v-.001zM126.42 74.756c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011v-13.035c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"></path><path fill="#F34F29" d="M52.7 61.7l-22.749-22.748c-1.309-1.31-3.434-1.31-4.744 0l-4.724 4.724 5.991 5.992c1.394-.47 2.99-.155 4.1.956 1.116 1.117 1.429 2.727.947 4.125l5.775 5.775c1.396-.481 3.009-.17 4.125.947 1.56 1.559 1.56 4.086 0 5.646-1.561 1.56-4.087 1.56-5.647 0-1.173-1.174-1.463-2.897-.869-4.342l-5.386-5.386-.001 14.174c.381.188.739.438 1.056.754 1.56 1.559 1.56 4.085 0 5.647-1.56 1.559-4.088 1.559-5.646 0-1.56-1.562-1.56-4.088 0-5.647.386-.385.831-.676 1.307-.871v-14.305c-.476-.194-.921-.484-1.307-.871-1.182-1.181-1.466-2.914-.86-4.365l-5.906-5.908-15.599 15.598c-1.311 1.311-1.311 3.436 0 4.747l22.749 22.748c1.31 1.31 3.434 1.31 4.746 0l22.642-22.644c1.311-1.31 1.311-3.436 0-4.746z"></path><path fill="none" d="M1.58 37.928h124.84v52.143h-124.84z"></path>
                      </svg>
                      <svg viewBox="0 0 128 128" width="10%" height="10%">
                        <path className="st0" d="M39.2,49.5c1,0.7,2,1.3,3,2c0.2,0.2,0.6,0.2,0.9,0.2c3.1-0.5,6.1,0,8.6,2c1.6,1.3,2.7,3,3.2,5 c0.1,0.6,0,0.8-0.6,0.7c-0.2,0-0.5,0-0.7,0c-1.5,0.2-2.6,0-3.4-1.7c-1-2.1-3.4-2.9-5.8-2.4c-0.1,1,0,2.1-0.2,3.1 c-0.7,3.3-2.4,6.1-5.6,7.7c-0.5,0.2-0.5,0.5-0.3,0.9c1.1,4,4.5,6.1,8.6,5.5c1.2-0.2,4.3-1.5,4.2-2c0-1,0-1.9,0-2.9 c0-0.6-0.2-0.8-0.7-0.8c-1.5,0-2.9,0-4.4,0c-0.6,0-0.8-0.2-0.7-0.8c0-0.6,0-1.2,0-1.8c0-0.5,0.1-0.7,0.6-0.6c2.8,0,5.6,0,8.5,0 c0.5,0,0.6,0.2,0.6,0.6c0,2.4,0,4.9,0,7.3c0,1.3-1,2.1-1.9,2.8c-1.7,1.2-3.7,1.7-5.7,1.8c-2.4,0.2-4.9,0.2-7.1-1 c-2.9-1.5-4.8-3.8-5.8-6.9c-0.3-0.9-0.5-1-1.3-0.5c-0.7,0.4-1,1.1-1,1.9c-0.1,1.8,0,3.7-0.1,5.5c0,0.3,0,0.5,0,0.9 c-1.4,0-2.8,0-4.1,0c-0.2,0-0.4-0.4-0.6-0.5C26.1,74.3,25,73,23.7,72c-2-1.6-3.9-1.1-5.2,1.1c-0.5,0.9-0.9,1.9-1.4,3 c-1.2,0-2.4,0-3.7,0c-0.2-0.6-0.2-1.2-0.5-1.8c-0.3-0.6-0.6-1.2-1.1-1.7c-0.9-1-2.1-1-3.1-0.1c-1.1,0.9-1.5,2.2-1.8,3.6 c-1.6,0-3.3,0-4.9,0c-0.1-0.8-0.2-1.6-0.4-2.4c0-1.4,0-2.9,0-4.3c0.1-0.7,0.2-1.5,0.3-2.2c0.4-2.7,1.2-5.3,3.1-7.5 c1.1-1.4,2.5-2.3,4.2-2.9c0.7,1.3,1.3,2.5,1.9,3.6c0.7,1.3,1.8,2.2,3.4,2.1c1.6-0.1,3.7-1.6,4.2-2.9c-0.2,0.2-0.4,0.3-0.5,0.4 c-0.8,0.5-1.6,1.1-2.5,1.4c-1.3,0.5-2.5,0.3-3.2-0.8c-1.1-1.8-2.1-3.7-3.1-5.6c-0.5-1-0.2-1.9,0.8-2.6c0.3-0.2,0.6-0.4,0.9-0.5 c2.1-0.6,4.2-1.3,6.3-1.7c5.3-0.9,10.1,0.4,14,4.3c1,1,2.2,1.9,3.5,3c1-1.9,2.3-3.4,4.1-4.5c-0.6-0.4-1.1-0.7-1.5-1.1 c-0.7-0.5-0.7-0.8-0.1-1.4c0.4-0.4,0.8-0.7,1.1-1C38.8,49.5,39,49.5,39.2,49.5z M28.3,58.4c-0.6-0.2-1.2-0.4-1.7-0.6 c-0.6,1.8,0.1,3.1,1.7,3.6c1.5,0.4,3.2-0.4,3.6-1.8c-0.4-0.1-0.8-0.3-1.4-0.5c0.1,0.9-0.2,1.5-1,1.7c-0.6,0.1-1.1,0-1.5-0.6 C27.6,59.6,27.8,59.1,28.3,58.4z M96.9,60.4c0-0.4,0-0.6,0-0.9c0-2.2,0-4.4,0-6.5c0-0.6,0.2-0.8,0.7-0.8c0.8,0,1.6,0,2.4,0 c0.6,0,0.8,0.2,0.7,0.8c0,3,0,6,0,9.1c0,2.4,0,4.7,0,7.1c0,2-0.1,4-0.1,6c0,0.5-0.2,0.7-0.7,0.7c-0.7,0-1.4,0-2.2,0 c-0.7,0-1-0.1-0.9-0.9c0-0.2,0-0.3-0.1-0.6c-0.2,0.1-0.4,0.1-0.5,0.2c-2.7,2.8-8.1,2-10.3-1.7c-2.1-3.6-1.5-9.5,1.5-12.4 c2.3-2.2,6.7-2.5,8.8-0.3C96.5,60.2,96.7,60.2,96.9,60.4z M96.5,64.6c-0.5-1.6-1.7-2.5-3.4-2.5c-1.5,0-2.7,0.6-3.5,2 c-1.2,2.3-1.1,4.6,0.1,6.8c1.4,2.6,5.1,2.5,6.4-0.1C97,69.5,97.1,65.8,96.5,64.6z M83.2,75.7c-1.2,0-2.5,0-3.7,0 c-0.5,0-0.6-0.2-0.7-0.6c0-0.2-0.1-0.4-0.1-0.7c-0.3,0.2-0.6,0.3-0.9,0.5c-2.2,1.2-4.5,1.6-6.9,0.6c-2-0.8-3.1-2.4-3.2-4.5 c0-1.9,0.8-3.6,2.6-4.4c1.4-0.6,2.9-0.9,4.3-1.3c1-0.3,2.1-0.5,3.1-0.8c0.4-0.1,0.8-0.6,0.9-1c0.2-0.6-0.1-1.2-0.7-1.6 c-1.3-0.8-3.7-0.6-4.8,0.3c-0.3,0.2-0.6,0.6-0.6,0.9c-0.1,0.7-0.5,0.7-1.1,0.7c-0.7,0-1.4,0-2.2,0c-0.7,0-0.8-0.3-0.7-0.8 c0.3-1.5,1-2.7,2.4-3.5c1.8-1,3.7-1.2,5.7-1c0.9,0.1,1.7,0.2,2.6,0.4c2.4,0.6,3.5,2.1,3.5,4.5c0,2.6,0,5.2,0,7.8c0,1,0,1.9,0,2.9 C82.9,74.7,83.1,75.1,83.2,75.7z M78.9,67.4c-1.3,0.3-2.5,0.6-3.7,0.9c-0.7,0.2-1.4,0.3-2,0.5c-1,0.4-1.4,1.1-1.3,2.2 c0.1,0.8,0.6,1.4,1.5,1.6c1.4,0.4,2.7,0.2,3.9-0.5C78.9,71.3,79.4,69.6,78.9,67.4z M114,68.2c-0.2,1.5,1.1,3.3,2.6,3.9 c1.7,0.7,4.7,0.6,5.9-1.4c0.1-0.2,0.5-0.3,0.7-0.2c0.9,0.4,1.7,0.9,2.6,1.4c-0.6,1.3-1.5,2.2-2.6,3c-2.9,2.1-9.3,1.9-11.9-2.2 c-0.9-1.4-1.3-3-1.4-4.7c-0.1-2.1,0.2-4.1,1.4-5.9c1.3-2,3.2-3,5.5-3.4c1.6-0.2,3.2,0,4.7,0.5c2.9,1.1,4.1,3.5,4.6,6.4 c0.1,0.6,0.1,1.1,0.2,1.7c0.1,0.6-0.2,0.8-0.8,0.8c-3.5,0-7,0-10.5,0C114.6,68.2,114.3,68.2,114,68.2z M114.1,65.4 c2.6,0,5.2,0,7.8,0c0.2-1.7-1.4-3.5-3.1-3.6C116.2,61.6,114.2,63,114.1,65.4z M103.9,74.8c0,0.7,0.2,1,0.9,0.9c0.7-0.1,1.4,0,2.1,0 c0.7,0,0.9-0.2,0.9-0.9c0-3,0-6,0-9.1c0-4.3,0.1-8.7,0.1-13c0-0.5-0.2-0.6-0.6-0.6c-0.8,0-1.6,0-2.5,0c-0.7,0-0.9,0.2-0.9,0.9 c0,3.6,0,7.2,0,10.8C103.9,67.6,103.9,71.2,103.9,74.8z M61.3,61.1c0-0.5,0-1,0-1.5c0-0.4-0.2-0.6-0.6-0.6c-0.8,0-1.6,0-2.5,0 c-0.5,0-0.7,0.2-0.7,0.7c0,5.1,0,10.3,0,15.4c0,0.5,0.2,0.7,0.7,0.7c0.7,0,1.4,0,2.2,0c0.7,0.1,0.9-0.2,0.9-0.9 c0-2.6,0.1-5.3,0.1-7.9c0.1-2,1.3-3.6,3.3-4.1c0.4-0.1,0.9-0.1,1.4-0.2c0.5-0.1,0.7-0.3,0.7-0.8c0-0.8,0-1.7,0-2.5 c0-0.5-0.2-0.7-0.7-0.7c-1.6,0.1-3.1,0.6-4.1,1.9c-0.1,0.2-0.3,0.4-0.5,0.6C61.5,61.1,61.4,61.1,61.3,61.1z"></path>
                      </svg>
          
                      
      
                    </div>
                  </div>
                </div>
              </GridItem>
            </GridContainer >
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(experienceStyle)(SectionExperience);