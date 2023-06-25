
const bellyData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


// Trying it out a little more dynamically...
// THIS IS THE BEST WORKING VERSION OF #2. 
// QUESTION FOR KYLE: Should I be using Object.values function in this code? 

d3.json(bellyData).then(function(data)
{
    let selID = data.samples.filter(object => object.id === "940")

    let selectID = selID[0]

    console.log(selectID)

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


    console.log(`OTU List: ${otuList}`)
    console.log(`Sample Value List: ${sampleValList}`)
    console.log(`OTU Labels: ${otuLabelList}`)

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

    Plotly.newPlot("plot", myData, layout)

});




// GETTING CLOSER!!! 


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










// Going to try to do the bubble chart now, also just for one sample -- WILL NEED to add a dropdown menu. 
// Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.



// APPENDIX -- past work...

// d3.json(bellyData).then(function(rows){
//     console.log(rows);
// })



// This is the closest I've gotten to it, but still a ways off...

// d3.json(bellyData).then(function(data){

//     console.log(data.samples[0]["otu_ids"].slice(0,10))
//     let topTenOtus = data.samples[0]["otu_ids"].slice(0,10);
//     let otuCounts = data.samples[0]["sample_values"].slice(0,10);

//     let trace = {
//         x: topTenOtus,
//         y: otuCounts,
//         type: "bar"
//     }

//     let myData = [trace];

//     let layout = {
//     title: "OTU Frequency"
//     }

//     Plotly.newPlot("plot", myData, layout)

// })




// Another attempt, but nada...

// d3.json(bellyData).then(function(data){

//     let trace1 = {
//         x: data.sample[0].otu_ids.map(object => object),
//         y: data.sample[0].sample_values.map(object => object),
//         type: "bar",
//         orientation: "h"
//     };

//     let myData = [trace1];

//     let layout = {
//         title: "OTU Frequency"
//     };

//     Plotly.newPlot("plot", myData, layout)

// })


// This is working for #2: create a horizontal bar chart BUT still need to add a dropdown menu. 

// d3.json(bellyData).then(function(data)
// {
 
//     let otuList = []
//     for (let i = 0; i < 10; i++){
//         otuList.push(`OTU ${data.samples[0].otu_ids[i]}`)
//     };

//     let sampleValList = []
//     for (let i = 0; i < 10; i++){
//         sampleValList.push(data.samples[0].sample_values[i])
//     };

//     let otuLabelList = []
//     for (let i = 0; i < 10; i++){
//         otuLabelList.push(data.samples[0].otu_labels[i])
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