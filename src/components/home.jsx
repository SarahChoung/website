import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'd-none',
      text: 'Web Developer',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 3500
    }
    // this.S = React.createRef();
    // this.A = React.createRef();
    // this.R = React.createRef();
    // this.H = React.createRef();
    // this.C = React.createRef();
    // this.O = React.createRef();
    // this.U = React.createRef();
    // this.N = React.createRef();
    // this.G = React.createRef();
    this.words = ['Web Developer', 'Problem Solver', 'Always Learning'];
    this.showDescription = this.showDescription.bind(this);
    this.type = this.type.bind(this)
  }


  type() {
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % this.words.length;
    const fullText = this.words[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 100
    });

    if (!isDeleting && text === fullText) {

      setTimeout(() => this.setState({ isDeleting: true }), 1000);

    } else if (isDeleting && text === '') {
      setTimeout(() => this.setState({ isDeleting: false, loopNum: loopNum + 1 }), 500);

    }

    setTimeout(this.type, typingSpeed);
  };


  showDescription() {
    setTimeout(() => {
      this.setState({ description: 'null' })
    }, 3500)
  }


  componentDidMount() {
    // console.log("S", this.S.current.getTotalLength())
    // console.log("A", this.A.current.getTotalLength())
    // console.log("R", this.R.current.getTotalLength())
    // console.log("H", this.H.current.getTotalLength())
    // console.log("C", this.C.current.getTotalLength())
    // console.log("O", this.O.current.getTotalLength())
    // console.log("U", this.U.current.getTotalLength())
    // console.log("N", this.N.current.getTotalLength())
    // console.log("G", this.G.current.getTotalLength())
    this.showDescription()
    this.type()
  }
  render() {
    return (
      <div id="home" className="d-flex flex-column align-items-center position-relative">
        <svg id="logo" width="75%" viewBox="0 0 1125 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.912 103.008C28.288 103.008 22.336 101.856 17.056 99.552C11.872 97.152 7.79201 93.888 4.81601 89.76C1.84001 85.536 0.304008 80.688 0.208008 75.216H14.176C14.656 79.92 16.576 83.904 19.936 87.168C23.392 90.336 28.384 91.92 34.912 91.92C41.152 91.92 46.048 90.384 49.6 87.312C53.248 84.144 55.072 80.112 55.072 75.216C55.072 71.376 54.016 68.256 51.904 65.856C49.792 63.456 47.152 61.632 43.984 60.384C40.816 59.136 36.544 57.792 31.168 56.352C24.544 54.624 19.216 52.896 15.184 51.168C11.248 49.44 7.84001 46.752 4.96001 43.104C2.17601 39.36 0.784008 34.368 0.784008 28.128C0.784008 22.656 2.17601 17.808 4.96001 13.584C7.74401 9.36 11.632 6.09599 16.624 3.792C21.712 1.488 27.52 0.335999 34.048 0.335999C43.456 0.335999 51.136 2.688 57.088 7.392C63.136 12.096 66.544 18.336 67.312 26.112H52.912C52.432 22.272 50.416 18.912 46.864 16.032C43.312 13.056 38.608 11.568 32.752 11.568C27.28 11.568 22.816 13.008 19.36 15.888C15.904 18.672 14.176 22.608 14.176 27.696C14.176 31.344 15.184 34.32 17.2 36.624C19.312 38.928 21.856 40.704 24.832 41.952C27.904 43.104 32.176 44.448 37.648 45.984C44.272 47.808 49.6 49.632 53.632 51.456C57.664 53.184 61.12 55.92 64 59.664C66.88 63.312 68.32 68.304 68.32 74.64C68.32 79.536 67.024 84.144 64.432 88.464C61.84 92.784 58 96.288 52.912 98.976C47.824 101.664 41.824 103.008 34.912 103.008Z" stroke="black" strokeWidth="5" />
          <path d="M146.932 79.68H103.156L95.0916 102H81.2676L117.556 2.208H132.676L168.82 102H154.996L146.932 79.68ZM143.188 69.024L125.044 18.336L106.9 69.024H143.188Z" stroke="black" strokeWidth="5" />
          <path d="M237.483 102L213.579 60.96H197.739V102H184.635V1.632H217.035C224.619 1.632 231.003 2.928 236.187 5.52C241.467 8.112 245.403 11.616 247.995 16.032C250.587 20.448 251.883 25.488 251.883 31.152C251.883 38.064 249.867 44.16 245.835 49.44C241.899 54.72 235.947 58.224 227.979 59.952L253.179 102H237.483ZM197.739 50.448H217.035C224.139 50.448 229.467 48.72 233.019 45.264C236.571 41.712 238.347 37.008 238.347 31.152C238.347 25.2 236.571 20.592 233.019 17.328C229.563 14.064 224.235 12.432 217.035 12.432H197.739V50.448Z" stroke="black" strokeWidth="5" />
          <path d="M331.572 79.68H287.796L279.732 102H265.908L302.196 2.208H317.316L353.46 102H339.636L331.572 79.68ZM327.828 69.024L309.684 18.336L291.54 69.024H327.828Z" stroke="black" strokeWidth="5" />
          <path d="M446.604 1.632V102H433.5V56.496H382.38V102H369.276V1.632H382.38V45.696H433.5V1.632H446.604Z" stroke="black" strokeWidth="5" />
          <path d="M502.473 51.744C502.473 41.952 504.681 33.168 509.097 25.392C513.513 17.52 519.513 11.376 527.097 6.96C534.777 2.544 543.273 0.335999 552.585 0.335999C563.529 0.335999 573.081 2.976 581.241 8.256C589.401 13.536 595.353 21.024 599.097 30.72H583.401C580.617 24.672 576.585 20.016 571.305 16.752C566.121 13.488 559.881 11.856 552.585 11.856C545.577 11.856 539.289 13.488 533.721 16.752C528.153 20.016 523.785 24.672 520.617 30.72C517.449 36.672 515.865 43.68 515.865 51.744C515.865 59.712 517.449 66.72 520.617 72.768C523.785 78.72 528.153 83.328 533.721 86.592C539.289 89.856 545.577 91.488 552.585 91.488C559.881 91.488 566.121 89.904 571.305 86.736C576.585 83.472 580.617 78.816 583.401 72.768H599.097C595.353 82.368 589.401 89.808 581.241 95.088C573.081 100.272 563.529 102.864 552.585 102.864C543.273 102.864 534.777 100.704 527.097 96.384C519.513 91.968 513.513 85.872 509.097 78.096C504.681 70.32 502.473 61.536 502.473 51.744Z" stroke="black" strokeWidth="5" />
          <path d="M695.932 1.632V102H682.828V56.496H631.708V102H618.604V1.632H631.708V45.696H682.828V1.632H695.932Z" stroke="black" strokeWidth="5" />
          <path d="M763.811 103.008C754.499 103.008 746.003 100.848 738.323 96.528C730.643 92.112 724.547 86.016 720.035 78.24C715.619 70.368 713.411 61.536 713.411 51.744C713.411 41.952 715.619 33.168 720.035 25.392C724.547 17.52 730.643 11.424 738.323 7.104C746.003 2.688 754.499 0.48 763.811 0.48C773.219 0.48 781.763 2.688 789.443 7.104C797.123 11.424 803.171 17.472 807.587 25.248C812.003 33.024 814.211 41.856 814.211 51.744C814.211 61.632 812.003 70.464 807.587 78.24C803.171 86.016 797.123 92.112 789.443 96.528C781.763 100.848 773.219 103.008 763.811 103.008ZM763.811 91.632C770.819 91.632 777.107 90 782.675 86.736C788.339 83.472 792.755 78.816 795.923 72.768C799.187 66.72 800.819 59.712 800.819 51.744C800.819 43.68 799.187 36.672 795.923 30.72C792.755 24.672 788.387 20.016 782.819 16.752C777.251 13.488 770.915 11.856 763.811 11.856C756.707 11.856 750.371 13.488 744.803 16.752C739.235 20.016 734.819 24.672 731.555 30.72C728.387 36.672 726.803 43.68 726.803 51.744C726.803 59.712 728.387 66.72 731.555 72.768C734.819 78.816 739.235 83.472 744.803 86.736C750.467 90 756.803 91.632 763.811 91.632Z" stroke="black" strokeWidth="5" />
          <path d="M844.326 1.632V65.136C844.326 74.064 846.486 80.688 850.806 85.008C855.222 89.328 861.318 91.488 869.094 91.488C876.774 91.488 882.774 89.328 887.094 85.008C891.51 80.688 893.718 74.064 893.718 65.136V1.632H906.822V64.992C906.822 73.344 905.142 80.4 901.782 86.16C898.422 91.824 893.862 96.048 888.102 98.832C882.438 101.616 876.054 103.008 868.95 103.008C861.846 103.008 855.414 101.616 849.654 98.832C843.99 96.048 839.478 91.824 836.118 86.16C832.854 80.4 831.222 73.344 831.222 64.992V1.632H844.326Z" stroke="black" strokeWidth="5" />
          <path d="M1007.59 102H994.49L941.786 22.08V102H928.682V1.488H941.786L994.49 81.264V1.488H1007.59V102Z" stroke="black" strokeWidth="5" />
          <path d="M1105.96 30.72C1103.18 24.864 1099.15 20.352 1093.87 17.184C1088.59 13.92 1082.44 12.288 1075.44 12.288C1068.43 12.288 1062.09 13.92 1056.43 17.184C1050.86 20.352 1046.44 24.96 1043.18 31.008C1040.01 36.96 1038.43 43.872 1038.43 51.744C1038.43 59.616 1040.01 66.528 1043.18 72.48C1046.44 78.432 1050.86 83.04 1056.43 86.304C1062.09 89.472 1068.43 91.056 1075.44 91.056C1085.23 91.056 1093.29 88.128 1099.63 82.272C1105.96 76.416 1109.66 68.496 1110.72 58.512H1070.68V47.856H1124.68V57.936C1123.92 66.192 1121.32 73.776 1116.91 80.688C1112.49 87.504 1106.68 92.928 1099.48 96.96C1092.28 100.896 1084.27 102.864 1075.44 102.864C1066.12 102.864 1057.63 100.704 1049.95 96.384C1042.27 91.968 1036.17 85.872 1031.66 78.096C1027.24 70.32 1025.04 61.536 1025.04 51.744C1025.04 41.952 1027.24 33.168 1031.66 25.392C1036.17 17.52 1042.27 11.424 1049.95 7.104C1057.63 2.688 1066.12 0.48 1075.44 0.48C1086.09 0.48 1095.5 3.12 1103.66 8.4C1111.92 13.68 1117.92 21.12 1121.66 30.72H1105.96Z" stroke="black" strokeWidth="5" />
        </svg>
        <span id="home-description">{this.state.text}</span>
      </div>)
  }
}
