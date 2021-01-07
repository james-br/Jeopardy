

//Finds the 6 random titles 
async function findRandom(){
    const res = await axios.get(`http://jservice.io/api/random`, {
        params: {
            count: 6
        }
    });
    let random = res.data.map(arr => ({
        category: arr.category_id,
        title: arr.category.title
    }));
    return random;
}

//populates category ID
function createsCategory(ident){
    for(let question of ident){
        let cat1 = question.category;
        let titlem = question.title;
        postTitles(titlem,cat1);
    }
}

//post titles into HTML
function postTitles(title, cat1){
    const $showsList = $("#title");
    let $item = $(
            `<div class=" border border-dark grid-item" id="${cat1}">${title}</div>`
    );
    $showsList.append($item);   
}

//return catagory information, (id, question, answer, value)
async function getcat(Ident) {
    const res = await axios.get('http://jservice.io/api/category', {
        params: {
           id: Ident
        }
    });
   
    let catagories = res.data.clues.map(cat => {
        return {
        id: cat.id,
        question: cat.question,
        answer: cat.answer,
        value: cat.value
        }
    });
    return catagories;
}

//post questions into HTML
function postQuest(quest){
    quest.length = Math.min(quest.length, 5);
    const $showQuest = $("#questions");
    let temp = 0;
    for(let que of quest){
        let $item = $(`
            <a class="border border-dark grid-item toggles align-middle"   id="${que.id}">
                <div class="price align-middle" id="${que.id}">${count(temp)}</div>
                <div class="question" id="${que.id}">${que.question}</div>
                <div class="answer" id="${que.id}">${que.answer}</div>
            </a>   
    `);
    temp++;
    $showQuest.append($item);
    $(".question").hide();
    $(".answer").hide();
    }
}

//returns ID of 6 random categories
async function test(){
    let temp = await findRandom();
    createsCategory(temp);
    
    for(let place of temp){
        let count = await getcat(place.category); // Category ID
        count.length = Math.min(count.length, 6);
       postQuest(count);
       
    }
    
}

//creates value for questions
function count(temp){

    if(temp == 0){
        return "$200";
    } else if(temp == 1){
        return "$400";
    } else if(temp == 2){
        return "$600";
    } else if(temp == 3){
        return "$800";
    } else if(temp == 4){
        
        return "$1000";
    }
}

//reveals the question and answer
$("body").on("click",".toggles",function(e){
    let $showId = e.target.id;
    $(`#${$showId} .price`).hide();
    $(`#${$showId} .question`).show();
    $("body").on("click", ".toggles", function(){
        $(`#${$showId} .question`).hide();
        $(`#${$showId} .answer`).show();
        $("body").on("click", ".toggles", function(){
            $(`#${$showId} .answer`).hide();
        });
    });
});

//resets the game
$("body").on("click", ".reset", function(){
    location.reload();
});

test();





// findTitles();

// getcat();
//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]



let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO