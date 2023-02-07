import React from 'react'
import './testcss.css'
import { Document, Packer, HeadingLevel, ImageRun, Paragraph, Table, TableCell, TableRow, VerticalAlign,TableOfContents,StyleLevel } from "docx";
import { saveAs } from "file-saver";

// import * as fs from 'fs';


const FakeDataCvs = [
  {
    Id: 1,
    Name: "Michael",
    Country: "U.S"
  },
  {
    Id: 2,
    Name: "Carl",
    Country: "Canada"
  },
  {
    Id: 3,
    Name: "James",
    Country: "México"
  }
];



function Test() {
  const generate = () => {
    
  const doc = new Document({
    features: {
      updateFields: true,
  },
  styles: {  
      paragraphStyles: [
          {
              id: "MySpectacularStyle",
              name: "My Spectacular Style",
              basedOn: "Heading1",
              next: "Heading1",
              quickFormat: true,
              run: {
                  italics: true,
                  color: "990000",
              },
          },
      ],
  },
  sections: [
      {
          children: [
              new TableOfContents("Summary", {
                  hyperlink: true,
                  headingStyleRange: "1-5",
                  stylesWithLevels: [new StyleLevel("MySpectacularStyle", 1)],
              }),
              new Paragraph({
                  text: "Header #1",
                  heading: HeadingLevel.HEADING_1,
                  pageBreakBefore: true,
              }),
              new Paragraph(` ${FakeDataCvs["Name"]}`),
              new Paragraph({
                  text: "Header #2",
                  heading: HeadingLevel.HEADING_1,
                  pageBreakBefore: true,
              }),
              new Paragraph("I'm a other text very nicely written.'"),
              new Paragraph({
                  text: "Header #2.1",
                  heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph("I'm a another text very nicely written.'"),
              new Paragraph({
                  text: "My Spectacular Style #1",
                  style: "MySpectacularStyle",
                  pageBreakBefore: true,
              }),
          ],
      },
  ],
  });
  
  // Packer.toBuffer(doc).then((buffer)=>{
  //   fs.writeFileSync("My Docment.docx" , buffer);
  // });
  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
  };

  // const generate = () => {


  //   // Packer.toBlob(doc).then((blob) => {
  //   //   console.log(blob);
  //   //   saveAs(blob, "example.docx");
  //   //   console.log("Document created successfully");
  //   // });


  // };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
        <button onClick={generate} >Generate doc</button>
      </div>
    </>
  )
}

export default Test