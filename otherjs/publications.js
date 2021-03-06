var papers = {"papers": [
  {
    "title": "Unmasking structural patterns in incidence matrices: an application to ecological data",
    "authors": ["Bernat Bramon Mora", "Giulio V. Dalla Riva", "Daniel B. Stouffer"],
    "journal": "Journal of the Royal Society Interface",
    "date": "Accepted",
    "vol": " ",
    "pages": " ",
    "doi": " ",
    "localFileName": "jrsi2019",
    "oa": true
  },
  {
    "title": "pymfinder: a tool for the motif analysis of binary and quantitative complex networks",
    "authors": ["Bernat Bramon Mora", "Alyssa R. Cirtwill", "Daniel B. Stouffer"],
    "journal": "bioRxiv",
    "date": "Sep 2018",
    "vol": "-",
    "pages": "-",
    "doi": "https://doi.org/10.1101/364703",
    "localFileName": "364703",
    "oa": true
  },
  {
    "title": "Seeing the forest for the trees: putting multilayer networks to work for community ecology",
    "authors": ["Matthew C. Hutchinson", "Bernat Bramon Mora", "Shai Pilosof", "Allison K. Barner", "Sonia Kéfi", "Elisa Thébault", "Pedro Jordano", "Daniel B. Stouffer"],
    "journal": "Functional Ecology",
    "date": "November 2018",
    "vol": "0",
    "pages": "1--12",
    "doi": "https://doi.org/10.1111/1365-2435.13237",
    "localFileName": "Hutchinson_et_al-2018-Functional_Ecology",
    "oa": true
  },
  {
    "title": "Identifying a common backbone of interactions underlying food webs from different ecosystems",
    "authors": ["Bernat Bramon Mora", "Dominique Gravel", "Luis J. Gilarranz", "Timothée Poisot", "Daniel B. Stouffer"],
    "journal": "Nature Communications",
    "date": "July 2018",
    "vol": "-",
    "pages": "9:2603",
    "doi": "https://doi.org/10.1038/s41467-018-05056-0",
    "localFileName": "s41467-018-05056-0",
    "oa": true
  }
]}

function boldIfBernat(thisAuthor){
  if (thisAuthor == "Bernat Bramon Mora"){
    return "<b>" + thisAuthor + "</b>"
  } else{
    return thisAuthor
  }
}

function formatAuthors(authors){
  for (var i = 0; i < authors.length; i++){
    authors[i] = boldIfBernat(authors[i])
  }
  return authors.join(", ")  
}

function formatJournal(paper){
  var formatedName = "<em>" + paper.date + ". " + "<b>" + paper.journal + "</b>" + ". " + paper.vol + ", " + paper.pages + "</em>"
  return formatedName
}

function createPaper(paper){
  // Create parent column
  var thisPaper = document.createElement("div")
  thisPaper.classList.add("col-md-6")
  thisPaper.classList.add("my-4")
  thisPaper.classList.add("px-4")
  // Create internal row
  var paperIntRow = document.createElement("div")
  paperIntRow.classList.add("row")
  // Create column for thumbnail
  var thumbnailCol = document.createElement("div")
  thumbnailCol.classList.add("col-sm-5")
  thumbnailCol.classList.add("d-none")
  thumbnailCol.classList.add("d-sm-block")
  thumbnailCol.classList.add("d-md-none")
  thumbnailCol.classList.add("d-lg-block")
  // Create thumbnail
  var pdfLink = document.createElement("a")
  pdfLink.setAttribute("href", "publications/" + paper.localFileName + ".pdf")
  pdfLink.setAttribute("target", "_blank")
  var thumbnail = document.createElement("img")
  thumbnail.setAttribute("src", "publications/thumbnails/" + paper.localFileName + ".png")
  thumbnail.setAttribute("alt", paper.title)
  thumbnail.classList.add("img-fluid")
  thumbnail.classList.add("img-thumbnail")
  // Create description column
  var descColumn = document.createElement("div")
  
  descColumn.classList.add("col-sm-7")
  descColumn.classList.add("col-md-12")
  descColumn.classList.add("col-lg-6")
  descColumn.classList.add("description-column")
  // Create title
  var paperTitle = document.createElement("h3")
  paperTitle.classList.add("paper-title")
  if(paper.oa){
    var thisTitle = paper.title + " <i class='ai ai-open-access'></i>"
  } else {
    var thisTitle = paper.title
  }
  paperTitle.innerHTML = thisTitle
  // Create author list
  var authorsP = document.createElement("p")
  authorsP.innerHTML = formatAuthors(paper.authors)
  // Create journal details
  var journalP = document.createElement("p")
  journalP.innerHTML = formatJournal(paper)
  // doi
  var doiP = document.createElement("p")
  doiP.classList.add("small")
  var doiLink = document.createElement("a")
  doiLink.setAttribute("href", paper.doi)
  doiLink.setAttribute("rel", "external")
  doiLink.setAttribute("target", "_blank")
  doiLink.innerHTML = "<i class='ai ai-doi ai-2x' style='vertical-align:middle;'></i> " + paper.doi.substr(16)
  doiP.appendChild(doiLink)
  // Apend objects first image then description then overall
  var thumbnailLink = pdfLink.cloneNode(true)
  thumbnailLink.appendChild(thumbnail)
  thumbnailCol.appendChild(thumbnailLink)

  paperIntRow.appendChild(thumbnailCol)

  var titleLink = pdfLink.cloneNode(true)
  titleLink.appendChild(paperTitle)
  descColumn.appendChild(titleLink)
  descColumn.appendChild(authorsP)
  descColumn.appendChild(journalP)
  descColumn.appendChild(doiP)

  paperIntRow.appendChild(descColumn)
  thisPaper.appendChild(paperIntRow)

  return thisPaper
}

