
const bellyData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// We start by creating a function that initializes with the first value in the dropdown list (OTU ID 940) as the default. 

function main(){

    let userSelection = d3.select("#selDataset")

    d3.json(bellyData).then((data) => {
        let dropdown_list = data.names;

        for (let i=0; i<dropdown_list.length; i++){
            userSelection.append("option").text(dropdown_list[i]).property("value", dropdown_list[i]);
        };
    
    let defaultValue = dropdown_list[0];

    barChart(defaultValue)
    bubbleChart(defaultValue);
    metadata(defaultValue)
    
    });
};

main();


// Using this optionChanged function to accept the newInput as whatever the user selects from the dropdown menu. 
// That value will then be used in each of the three relevant functions: barChart, bubbleChart, and metadata. 


function optionChanged(newInput){
    barChart(newInput),
    bubbleChart(newInput),
    metadata(newInput)
};


// Building the bar chart. 

function barChart(sample){
    
    d3.json(bellyData).then(function(data){

        let selID = data.samples.filter(object => object.id === sample)

        let selectID = selID[0]
            
        console.log("barChart", selectID)
            
        let otuList = []
        for (let i = 0; i < 10; i++){
            otuList.push(`OTU ${selectID.otu_ids[i]}`)
        };
            
        let sampleValList = []
        for (let i = 0; i < 10; i++){
            sampleValList.push(selectID.sample_values[i])
        };
            
        let otuLabelList = []
        for (let i = 0; i < 10; i++){
            otuLabelList.push(selectID.otu_labels[i])
        };
                        
        let trace = {
            x: sampleValList.map(object => object).reverse(),
            y: otuList.map(object => object).reverse(),
            type: "bar",
            orientation: "h",
            hovertext: otuLabelList.map(object => object).reverse()
        };
            
        let myData = [trace];
            
        let layout = {
            title: "Top 10 OTUs in Individual",
            xaxis: {
                title: "Sample Value"
            }
        };
            
        Plotly.newPlot("bar", myData, layout)

    });
};


// Building the bubble chart. 

function bubbleChart(sample){
    
     d3.json(bellyData).then(function(data){

        let selID = data.samples.filter(object => object.id === sample)

        let selectID = selID[0]
            
        console.log("bubble", selectID)

        let otuIDs = selectID.otu_ids 

        console.log("x-axis", otuIDs)

        let sample_values = selectID.sample_values

        console.log("y-axis", sample_values)

        var desired_maximum_marker_size = 40;

        var trace1 = {
        x: otuIDs,
        y: sample_values,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otuIDs
        }
      };
      
      var myData = [trace1];
      
      var layout = {
        // title: 'Marker Size',
        showlegend: false,
        // height: 600,
        // width: 600,
        xaxis: {
            title: "OTU ID"
        },
        yaxis: {
            title: "Sample Value"
        }
      };
      
      Plotly.newPlot("bubble", myData, layout);



    });
};



// For the metadata, need to display each key-value pair: 
// {
//     "id": 940,
//     "ethnicity": "Caucasian",
//     "gender": "F",
//     "age": 24.0,
//     "location": "Beaufort/NC",
//     "bbtype": "I",
//     "wfreq": 2.0
// }


// Populating the metadata. 

function metadata(sample){
    d3.json(bellyData).then(function(data){
        
        console.log("sample", sample)

        let selID = data.metadata.filter(object => object.id === Number(sample))

        console.log("selID", selID)

        let selectID = selID[0]

        console.log(selectID)

        var demographics = Object.entries(selectID);

        d3.selectAll('p').remove();

        d3.select('#sample-metadata').selectAll('p').data(demographics).enter().append('p').text(d => {
            return `${d[0]}: ${d[1]}`
        })

        console.log(demographics)

        // let demoKeys = Object.keys(selectID)

        // let demoValues = Object.values(selectID)
        
        // console.log("object keys", demoKeys)
        // console.log("object values", demoValues)
        
        // // Doing this all manually -- need to make this more dynamic...
        // let demoInfo = document.getElementById("sample-metadata");
        // demoInfo.innerHTML = `${demoKeys[0]}: ${demoValues[0]} <br> ${demoKeys[1]}: ${demoValues[1]}` 

        // var Metadata=data.metadata;
        // Metadata.forEach(person => {
        //     if (person.id ==value){
        //         var demographics = Object.entries(person);
        //         wash = demographics[6][1];
        //         d3.selectAll('p').remove();
        //         d3.select('#sample-metadata').selectAll('p').data(demographics).enter().append('p').text(d=>{
        //             return `${d[0]}: ${d[1]}`;
        //         });
        //     }
        // });


    }
)};