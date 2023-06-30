
const bellyData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// THIS INIT() FUNCTION AND THE D3 PART IS WORKING, BUT I'D LIKE TO GET IT INTO A FUNCTION FORM INSTEAD. 

// function init(){

//     d3.json(bellyData).then(function(data)
//     {

//     let selID = data.samples.filter(object => object.id === "940")

//     console.log("What is selID?", selID)

//     let selectID = selID[0]

//     console.log("This is now selectID", selectID)

//     let otuList = []
//     for (let i = 0; i < 10; i++){
//         otuList.push(`OTU ${selectID.otu_ids[i]}`)
//     };

//     let sampleValList = []
//     for (let i = 0; i < 10; i++){
//         sampleValList.push(selectID.sample_values[i])
//     };

//     let otuLabelList = []
//     for (let i = 0; i < 10; i++){
//         otuLabelList.push(selectID.otu_labels[i])
//     };


//     console.log(`OTU List: ${otuList}`)
//     console.log(`Sample Value List: ${sampleValList}`)
//     console.log(`OTU Labels: ${otuLabelList}`)

//     let trace = {
//         x: sampleValList.map(object => object).reverse(),
//         y: otuList.map(object => object).reverse(),
//         type: "bar",
//         orientation: "h",
//         hovertext: otuLabelList.map(object => object).reverse() // this isn't pulling in the otu labels...
//     };

//     let myData = [trace];

//     let layout = {
//         title: "OTU Frequency"
//     };

//     Plotly.newPlot("plot", myData, layout)

// });

// }


// init();




// d3.json(bellyData).then(function(data){
    
//     let idNames = Object.values(data.names)
//     console.log("ids", idNames);

//     d3.select("#selDataset").on("click", function(){    
//         let dropdown = d3.select("#selDataset")
//         let choice = dropdown.property("value");
//         console.log("selected option", choice)

//         idNames.forEach(function(option) {
//             dropdown.append("option").text(option)});
    

//         let selID = data.samples.filter(object => object.id === choice)

//         let selectID = selID[0]
        
//         console.log(selectID)
        
//         let otuList = []
//         for (let i = 0; i < 10; i++){
//             otuList.push(`OTU ${selectID.otu_ids[i]}`)
//         };
        
//         let sampleValList = []
//         for (let i = 0; i < 10; i++){
//             sampleValList.push(selectID.sample_values[i])
//         };
        
//         let otuLabelList = []
//         for (let i = 0; i < 10; i++){
//             otuLabelList.push(selectID.otu_labels[i])
//         };
        
        
//         // console.log(`OTU List: ${otuList}`)
//         // console.log(`Sample Value List: ${sampleValList}`)
//         // console.log(`OTU Labels: ${otuLabelList}`)
        
//         let trace = {
//             x: sampleValList.map(object => object).reverse(),
//             y: otuList.map(object => object).reverse(),
//             type: "bar",
//             orientation: "h",
//             hovertext: otuLabelList.map(object => object).reverse() // this isn't pulling in the otu labels...
//         };
        
//         let myData = [trace];
        
//         let layout = {
//             title: "OTU Frequency"
//         };
        
//         Plotly.newPlot("plot", myData, layout)

//     });
// });


// TRYING THE FUNCTION VERSION...



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
            
            
            // console.log(`OTU List: ${otuList}`)
            // console.log(`Sample Value List: ${sampleValList}`)
            // console.log(`OTU Labels: ${otuLabelList}`)
            
        let trace = {
            x: sampleValList.map(object => object).reverse(),
            y: otuList.map(object => object).reverse(),
            type: "bar",
            orientation: "h",
            hovertext: otuLabelList.map(object => object).reverse() // this isn't pulling in the otu labels...
        };
            
        let myData = [trace];
            
        let layout = {
            title: "OTU Frequency"
        };
            
        Plotly.newPlot("bar", myData, layout)

    });
};


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
    
    });
};


function optionChanged(newInput){
    barChart(newInput)
    bubbleChart(newInput)
};



main();



function bubbleChart(sample){
    
    // Create a bubble chart that displays each sample.

    // Use otu_ids for the x values.

    // Use sample_values for the y values.

    // Use sample_values for the marker size.

    // Use otu_ids for the marker colors.

    // Use otu_labels for the text values.

    d3.json(bellyData).then(function(data){

        let selID = data.samples.filter(object => object.id === sample)

        let selectID = selID[0]
            
        console.log("bubble", selectID)

        let otuIDs = selectID.otu_ids 

        console.log("x-axis", otuIDs)

        let sample_values = selectID.sample_values

        console.log("y-axis", sample_values)

        var trace1 = {
        x: otuIDs,
        y: sample_values,
        mode: 'markers',
        marker: {
          size: 10
        }
      };
      
      var myData = [trace1];
      
      var layout = {
        // title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };
      
      Plotly.newPlot("bubble", myData, layout);



    });
};


function metadata(newInput){

};