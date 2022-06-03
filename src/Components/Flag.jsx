function Flag({ name }) {
    let src;
  
    switch (name) {
      case "N. California":
      case "N. Virginia":
      case "Ohio":
      case "Oregon":
        src = "https://flagicons.lipis.dev/flags/4x3/um.svg";
        break;
      case "Mumbai":
        src = "https://flagicons.lipis.dev/flags/4x3/in.svg";
        break;
      case "Frankfurt":
        src = "https://flagicons.lipis.dev/flags/4x3/de.svg";
        break;
      case "Singapore":
        src = "https://flagicons.lipis.dev/flags/4x3/sg.svg";
        break;
      case "Sydney":
        src = "https://flagicons.lipis.dev/flags/4x3/au.svg";
        break;
      case "Tokyo":
        src = "https://flagicons.lipis.dev/flags/4x3/jp.svg";
        break;
      case "Central":
        src = "https://flagicons.lipis.dev/flags/4x3/ca.svg";
        break;
      case "London":
        src = "https://flagicons.lipis.dev/flags/4x3/gb.svg";
        break;
    }
  
    return <img src={src} className="mr-3 w-5 border-hidden rounded-sm"></img>;
  }
  
  export default Flag;
  