/* =========================================================
   IT OLYMPIAD 2026
   PARTICIPANTS / PAYMENT LIST
   Updated Student List
   ========================================================= */

// =========================================================
// PARTICIPANT DATA
// =========================================================

const participants = [

    // =====================================================
    // FIRST YEAR
    // =====================================================

    { year: "First Year", last: "AGCOL", first: "EDMAR JUN", mi: "ADEZAS", gender: "M", paid: false },
    { year: "First Year", last: "AJERO", first: "NATHANIEL JOSEF", mi: "GERONA", gender: "M", paid: true },
    { year: "First Year", last: "ARMILLO", first: "MARIELLE", mi: "BUCADON", gender: "F", paid: false },
    { year: "First Year", last: "BARLISO", first: "STEPHANIE MARIS", mi: "SOSTINO", gender: "F", paid: true },
    { year: "First Year", last: "BAYOBO", first: "JAYCRIS", mi: "WABINA", gender: "M", paid: false },
    { year: "First Year", last: "CABALUNA", first: "KIMBERLY", mi: "TAN-AWON", gender: "F", paid: true },
    { year: "First Year", last: "CAÑETE", first: "MARK DANIEL", mi: "", gender: "M", paid: true },
    { year: "First Year", last: "CASERO", first: "MARJANEH", mi: "PASCO", gender: "F", paid: true },
    { year: "First Year", last: "CLORIBEL", first: "KRIS LAURENCE", mi: "", gender: "M", paid: false },
    { year: "First Year", last: "DAGOHOY", first: "LYRICO FREUD", mi: "TAMAYO", gender: "M", paid: true },
    { year: "First Year", last: "DIANA", first: "LOVELY", mi: "REMOROZA", gender: "F", paid: false },
    { year: "First Year", last: "DABON", first: "IRWIN JOSH", mi: "HAGONOS", gender: "M", paid: true },
    { year: "First Year", last: "DONBEL", first: "KRIS LAURENCE", mi: "", gender: "M", paid: false },
    { year: "First Year", last: "DUROPAN", first: "GLECERIO JR.", mi: "SULARTE", gender: "M", paid: true },
    { year: "First Year", last: "EGUIA", first: "RENZ", mi: "LIMA", gender: "M", paid: false },
    { year: "First Year", last: "GARIN", first: "MOHAMMAD NOOR", mi: "D", gender: "M", paid: false },
    { year: "First Year", last: "GENITA", first: "KHYLE LYNDON", mi: "RELLON", gender: "M", paid: false },
    { year: "First Year", last: "JANEO", first: "JOHN VICTOR", mi: "SAYABO", gender: "F", paid: false },
    { year: "First Year", last: "JIMENEZ", first: "RAD MC ALLEN", mi: "LANTACA", gender: "M", paid: false },
    { year: "First Year", last: "JONASAN", first: "JEREMIE", mi: "MADANI", gender: "M", paid: true },
    { year: "First Year", last: "LACANDULA", first: "JESSICA", mi: "", gender: "F", paid: true },
    { year: "First Year", last: "LAGNAYO", first: "NORINE FE", mi: "JOROLAN", gender: "M", paid: false },
    { year: "First Year", last: "LANTICSE", first: "JOSAYNE", mi: "SELOY", gender: "F", paid: true },
    { year: "First Year", last: "LAYAOG", first: "FERDINAND, JR.", mi: "PABROGUEZ", gender: "M", paid: true },
    { year: "First Year", last: "LOON", first: "MARV THEYNE", mi: "DIOLA", gender: "M", paid: false },
    { year: "First Year", last: "LUMEN", first: "ANGELO", mi: "TOLIBAS", gender: "M", paid: true },
    { year: "First Year", last: "MALTO", first: "FLORIAL JANE", mi: "", gender: "F", paid: true },
    { year: "First Year", last: "MANIB", first: "CHRISTIAN", mi: "AMELIC", gender: "M", paid: false },
    { year: "First Year", last: "MARANGA", first: "JOHN DAVE", mi: "PILLEJERA", gender: "M", paid: false },
    { year: "First Year", last: "MARCES", first: "EDDIE JR.", mi: "ABAR", gender: "M", paid: false },
    { year: "First Year", last: "MEÑOZA", first: "MARIAN JEE", mi: "VILLARMIA", gender: "F", paid: false },
    { year: "First Year", last: "NIERE", first: "MERLOE YAEL", mi: "FERRANDO", gender: "F", paid: false },
    { year: "First Year", last: "OLE", first: "FHEBIE GRACE", mi: "BONAJOS", gender: "F", paid: true },
    { year: "First Year", last: "ORBITA", first: "JAY-AR, JR.", mi: "CAÑARES", gender: "F", paid: true },
    { year: "First Year", last: "PAROJINOG", first: "SON GABRIEL", mi: "REMULTA", gender: "M", paid: true },
    { year: "First Year", last: "PENDULAS", first: "HANNAH", mi: "PADILLA", gender: "F", paid: true },
    { year: "First Year", last: "RESTAURO", first: "KYLE JEREMIE", mi: "", gender: "M", paid: true },
    { year: "First Year", last: "SANCHEZ", first: "MYKA ANTONIA", mi: "CADUNGOG", gender: "F", paid: true },
    { year: "First Year", last: "SARIP", first: "MOHAMMAD NOOR", mi: "D", gender: "M", paid: false },
    { year: "First Year", last: "SIMAN", first: "GENEVIEVE", mi: "TAMBIS", gender: "F", paid: true },
    { year: "First Year", last: "SORDILLA", first: "JOHN DAVE", mi: "MAHIDLAWON", gender: "M", paid: true },
    { year: "First Year", last: "TORRADO", first: "JOHN PAUL", mi: "ROA", gender: "M", paid: true },
    { year: "First Year", last: "TRAYA", first: "JEMBOY", mi: "OSAYAS", gender: "M", paid: false },
    { year: "First Year", last: "VILLARUEL", first: "PRINCESS DIA", mi: "DEBALUBOS", gender: "F", paid: true },
    { year: "First Year", last: "VISTAL", first: "JAMES RYAN", mi: "BAYBAY", gender: "M", paid: true },


    // =====================================================
    // SECOND YEAR
    // =====================================================

    { year: "Second Year", last: "ABARQUEZ", first: "MC HEIDEE", mi: "TABLAN", gender: "M", paid: true },
    { year: "Second Year", last: "ALCALA", first: "ADRIAN CARL", mi: "HERNANDEZ", gender: "M", paid: false },
    { year: "Second Year", last: "ATUEL", first: "KIER ANDREW", mi: "ROJAS", gender: "M", paid: true },
    { year: "Second Year", last: "ATUP", first: "JHON VINCENT", mi: "LEJARJO", gender: "M", paid: false },
    { year: "Second Year", last: "BARONA", first: "GELLA", mi: "SANCHEZ", gender: "F", paid: false },
    { year: "Second Year", last: "BASOG", first: "JOSHUA", mi: "ANTIPOLO", gender: "M", paid: false },
    { year: "Second Year", last: "BATERNA", first: "JEREMY", mi: "ZULUETA", gender: "M", paid: false },
    { year: "Second Year", last: "BATICAN", first: "ELLAINE ZAICY", mi: "", gender: "F", paid: true },
    { year: "Second Year", last: "BETUIN", first: "RIC JOHN", mi: "MIDTANGGAL", gender: "M", paid: false },
    { year: "Second Year", last: "CAPUL", first: "JUSTINE", mi: "LEYTE", gender: "M", paid: false },
    { year: "Second Year", last: "CASTILLO", first: "JAYCER", mi: "SISON", gender: "M", paid: true },
    { year: "Second Year", last: "DELA CRUZ", first: "DANNY JAMES", mi: "INFANTE", gender: "M", paid: true },
    { year: "Second Year", last: "EDUBAS", first: "MARK JAMES", mi: "TABLINGON", gender: "M", paid: false },
    { year: "Second Year", last: "ESPINEDO", first: "GEORGELLE", mi: "MILLADAS", gender: "M", paid: false },
    { year: "Second Year", last: "IGOT", first: "SYDE ANTHONY", mi: "ZAPANTA", gender: "M", paid: true },
    { year: "Second Year", last: "FEBRIO", first: "ROBERT", mi: "SOBEJANA", gender: "M", paid: false },
    { year: "Second Year", last: "GANOT", first: "SUMMER FAYE", mi: "YGRUBAY", gender: "F", paid: false },
    { year: "Second Year", last: "GAPA", first: "EMIL", mi: "PANAY", gender: "M", paid: false },
    { year: "Second Year", last: "GLANG", first: "WALED", mi: "DALI", gender: "M", paid: true },
    { year: "Second Year", last: "GUMAMA", first: "FAHAD", mi: "H.ILAS", gender: "M", paid: true },
    { year: "Second Year", last: "JAVELLANA", first: "ARTHUR Jr.", mi: "ENDRINA", gender: "M", paid: false },
    { year: "Second Year", last: "LAGOS", first: "KINTH JOHN", mi: "VILLANUEVA", gender: "M", paid: true },
    { year: "Second Year", last: "LEYSON", first: "HOWARD", mi: "CABUNGCAG", gender: "M", paid: false },
    { year: "Second Year", last: "MARUHOM", first: "ABDULAH", mi: "PANIO", gender: "M", paid: true },
    { year: "Second Year", last: "MATIVO", first: "LOVELY CARL", mi: "FLORIDA", gender: "M", paid: false },
    { year: "Second Year", last: "MORERA", first: "GEAN HARVEY", mi: "MOSO", gender: "M", paid: true },
    { year: "Second Year", last: "PALBAN", first: "IRISH", mi: "PAPELLERO", gender: "M", paid: true },
    { year: "Second Year", last: "PAMLIAN", first: "ESMAEL", mi: "MATONDO", gender: "M", paid: true },
    { year: "Second Year", last: "PELINGON", first: "CHUCKY", mi: "RUELINAS", gender: "M", paid: false },
    { year: "Second Year", last: "PEREZ", first: "JHE-ANN", mi: "BAREÑA", gender: "F", paid: false },
    { year: "Second Year", last: "PLAZA", first: "JOGAR", mi: "", gender: "M", paid: false },
    { year: "Second Year", last: "POLINAR", first: "JHUNRHOI", mi: "DAYDAY", gender: "M", paid: false },
    { year: "Second Year", last: "SAB", first: "JORINE", mi: "BENSON", gender: "F", paid: true },
    { year: "Second Year", last: "SALE", first: "AARON", mi: "CALAMBA", gender: "M", paid: true },
    { year: "Second Year", last: "SANCHEZ", first: "JOHN PATRICK", mi: "SINGSON", gender: "M", paid: false },
    { year: "Second Year", last: "SUAREZ", first: "DIVINE", mi: "BAYANON", gender: "F", paid: true },
    { year: "Second Year", last: "VILLANUEVA", first: "JOE VERGEL", mi: "", gender: "M", paid: false },


    // =====================================================
    // THIRD YEAR
    // =====================================================

    { year: "Third Year", last: "ABRAHAN", first: "FAISAL", mi: "INDE", gender: "M", paid: true },
    { year: "Third Year", last: "BRITOS", first: "REXEL JADE", mi: "BLANCA", gender: "M", paid: true },
    { year: "Third Year", last: "CANALEJA", first: "DEXTHER", mi: "REQUISO", gender: "M", paid: true },
    { year: "Third Year", last: "DANLAG", first: "RHEANY LYNETH", mi: "PIAMONTE", gender: "F", paid: true },
    { year: "Third Year", last: "DURBAN", first: "MICHAEL RUVEN", mi: "LUMAMBAS", gender: "M", paid: true },

    // Blank row in original list intentionally excluded

    { year: "Third Year", last: "FORTICH", first: "JASMINE", mi: "PEREZ", gender: "F", paid: true },
    { year: "Third Year", last: "GUBANTES", first: "ODRAN NOEL", mi: "YBAÑEZ", gender: "M", paid: true },
    { year: "Third Year", last: "IBABAO", first: "ASHLEY DAVE", mi: "ORFRECIO", gender: "F", paid: true },
    { year: "Third Year", last: "IMPERIAL", first: "NIKKI", mi: "TAMPUS", gender: "F", paid: true },
    { year: "Third Year", last: "JANEO", first: "JOHN VICTOR", mi: "SAYABO", gender: "M", paid: false },
    { year: "Third Year", last: "JAVELLANA", first: "JEAH", mi: "ENDRINA", gender: "F", paid: true },
    { year: "Third Year", last: "LETIC", first: "MYLENE", mi: "A", gender: "F", paid: true },
    { year: "Third Year", last: "LIM", first: "JEFF NICHOLSON", mi: "TAPINET", gender: "M", paid: true },
    { year: "Third Year", last: "MAYOLA", first: "JHON ANGELO", mi: "GOLORAN", gender: "M", paid: true },

    // Blank row in original list intentionally excluded

    { year: "Third Year", last: "PEMENTERA", first: "JOHN LESTER", mi: "ALEGADO", gender: "M", paid: false },
    { year: "Third Year", last: "RODIS", first: "ANGELIC", mi: "RENEGADO", gender: "F", paid: true },
    { year: "Third Year", last: "SARDONCILLO", first: "NILBEN", mi: "MANTOS", gender: "M", paid: true },
    { year: "Third Year", last: "SIBULAN", first: "FRANCIS JOHN", mi: "PAVIA", gender: "M", paid: false },
    { year: "Third Year", last: "TANQUE", first: "SHINOVAH ISHI", mi: "LUCERO", gender: "F", paid: true },


    // =====================================================
    // FOURTH YEAR
    // =====================================================

    { year: "Fourth Year", last: "ANONAS", first: "MICHAEL JHAMES", mi: "MORADA", gender: "M", paid: true },
    { year: "Fourth Year", last: "ARANQUEZ", first: "AILYN", mi: "BANZALI", gender: "F", paid: false },
    { year: "Fourth Year", last: "BAGUIO", first: "IAN", mi: "AYALA", gender: "M", paid: true },
    { year: "Fourth Year", last: "BAJENTING", first: "CYBER JOHN", mi: "REBULDAD", gender: "M", paid: false },
    { year: "Fourth Year", last: "BERIN", first: "WALID", mi: "MULLAMIN", gender: "M", paid: false },
    { year: "Fourth Year", last: "CADOTDOT", first: "ANGEL CRIS", mi: "JINETE", gender: "M", paid: true },
    { year: "Fourth Year", last: "CAMPOS", first: "CRISTAL JANE", mi: "ALACRE", gender: "F", paid: true },
    { year: "Fourth Year", last: "CARILLO", first: "JUSTIN BRYAN", mi: "OLIT", gender: "M", paid: false },
    { year: "Fourth Year", last: "GUINANAS", first: "ERICA", mi: "ECHAVEZ", gender: "F", paid: true },
    { year: "Fourth Year", last: "JAURIGUE", first: "MAVIE QUENEGENE", mi: "BALANZA", gender: "F", paid: false },
    { year: "Fourth Year", last: "LABOR", first: "GAILAN MAE", mi: "LEONIDA", gender: "F", paid: true },
    { year: "Fourth Year", last: "LASANDA", first: "LYSTER TROY", mi: "PIAMONTE", gender: "M", paid: true },
    { year: "Fourth Year", last: "LOREÑO", first: "MOANA MARIE", mi: "QUIÑANOLA", gender: "F", paid: true },
    { year: "Fourth Year", last: "MALUNES", first: "ANTHONY", mi: "ALMERIA", gender: "M", paid: true },
    { year: "Fourth Year", last: "MAQUIDATO", first: "CHRISTIAN DARRELL", mi: "LUZA", gender: "M", paid: false },
    { year: "Fourth Year", last: "PENDEZ", first: "RENANTE", mi: "PELEGRINO", gender: "M", paid: false },
    { year: "Fourth Year", last: "QUINES", first: "CEDRIC", mi: "LAUREZO", gender: "M", paid: false },
    { year: "Fourth Year", last: "SOMOSA", first: "LEONA", mi: "CUADRASAL", gender: "F", paid: true },
    { year: "Fourth Year", last: "SUERTE", first: "JOECRIS", mi: "FERNANDEZ", gender: "M", paid: false },
    { year: "Fourth Year", last: "VERTUDAZO", first: "JOHN ANGELO", mi: "SUMILHIG", gender: "M", paid: true },

    // Final separate CAMPUS entry from the updated list
    { year: "Fourth Year", last: "CAMPUS", first: "CRYSTAL JANE", mi: "", gender: "", paid: true }
];


// =========================================================
// GLOBAL VARIABLES
// =========================================================

let selectedYear = "All";


// =========================================================
// HELPER FUNCTIONS
// =========================================================

function getFullName(student) {

    let name = student.last;

    if (student.first) {
        name += ", " + student.first;
    }

    if (student.mi) {
        name += " " + student.mi;
    }

    return name;
}


function normalizeText(text) {
    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


// =========================================================
// GET FILTERED PARTICIPANTS
// =========================================================

function getFilteredParticipants() {

    const searchInput = document.getElementById("searchInput");
    const paymentFilter = document.getElementById("paymentFilter");
    const genderFilter = document.getElementById("genderFilter");

    const search = searchInput
        ? normalizeText(searchInput.value.trim())
        : "";

    const payment = paymentFilter
        ? paymentFilter.value
        : "all";

    const gender = genderFilter
        ? genderFilter.value
        : "all";

    return participants.filter(student => {

        // YEAR FILTER
        if (selectedYear !== "All" && student.year !== selectedYear) {
            return false;
        }

        // SEARCH FILTER
        if (search) {

            const searchableText = normalizeText(
                `${student.last} ${student.first} ${student.mi} ${student.year}`
            );

            if (!searchableText.includes(search)) {
                return false;
            }
        }

        // PAYMENT FILTER
        if (payment === "paid" && !student.paid) {
            return false;
        }

        if (payment === "unpaid" && student.paid) {
            return false;
        }

        // GENDER FILTER
        if (
            gender !== "all" &&
            student.gender.toLowerCase() !== gender.toLowerCase()
        ) {
            return false;
        }

        return true;
    });
}


// =========================================================
// RENDER DESKTOP TABLE
// =========================================================

function renderTable(list) {

    const tableBody = document.getElementById("participantTable");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    list.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>
                <strong>${student.last}</strong>
            </td>

            <td>
                ${student.first}
            </td>

            <td>
                ${student.mi || "—"}
            </td>

            <td>
                <span class="gender-badge ${student.gender === "F" ? "female" : "male"}">
                    ${student.gender || "—"}
                </span>
            </td>

            <td>
                <span class="payment-badge ${student.paid ? "paid" : "unpaid"}">
                    ${student.paid ? "PAID" : "UNPAID"}
                </span>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


// =========================================================
// RENDER MOBILE CARDS
// =========================================================

function renderMobile(list) {

    const container = document.getElementById("mobileParticipants");

    if (!container) return;

    container.innerHTML = "";

    list.forEach((student, index) => {

        const card = document.createElement("div");

        card.className = "participant-card";

        card.innerHTML = `
            <div class="participant-number">
                #${index + 1}
            </div>

            <div class="participant-info">

                <h3>
                    ${getFullName(student)}
                </h3>

                <div class="participant-meta">

                    <span>
                        ${student.year}
                    </span>

                    <span>
                        ${student.gender || "—"}
                    </span>

                </div>

            </div>

            <div class="participant-payment">

                <span class="payment-badge ${student.paid ? "paid" : "unpaid"}">
                    ${student.paid ? "PAID" : "UNPAID"}
                </span>

            </div>
        `;

        container.appendChild(card);
    });
}


// =========================================================
// UPDATE RESULT TEXT
// =========================================================

function updateResultText(count) {

    const resultText = document.getElementById("resultText");

    if (!resultText) return;

    if (count === 0) {

        resultText.textContent = "No participants found.";

    } else {

        resultText.textContent =
            `Showing ${count} participant${count !== 1 ? "s" : ""}`;
    }
}


// =========================================================
// UPDATE PAGE TITLE
// =========================================================

function updateTitle() {

    const currentTitle = document.getElementById("currentTitle");

    if (!currentTitle) return;

    if (selectedYear === "All") {

        currentTitle.textContent = "All Participants";

    } else {

        currentTitle.textContent = `${selectedYear} Participants`;
    }
}


// =========================================================
// SHOW / HIDE NO RESULTS
// =========================================================

function updateNoResults(count) {

    const noResults = document.getElementById("noResults");

    if (!noResults) return;

    noResults.style.display = count === 0 ? "block" : "none";
}


// =========================================================
// UPDATE PARTICIPANT DISPLAY
// =========================================================

function updateParticipants() {

    const filtered = getFilteredParticipants();

    renderTable(filtered);
    renderMobile(filtered);

    updateResultText(filtered.length);
    updateNoResults(filtered.length);
    updateTitle();
}


// =========================================================
// STATISTICS
// =========================================================

function updateStatistics() {

    const total = participants.length;

    const paid = participants.filter(
        student => student.paid
    ).length;

    const unpaid = participants.filter(
        student => !student.paid
    ).length;

    const firstYear = participants.filter(
        student => student.year === "First Year"
    ).length;

    const secondYear = participants.filter(
        student => student.year === "Second Year"
    ).length;

    const thirdYear = participants.filter(
        student => student.year === "Third Year"
    ).length;

    const fourthYear = participants.filter(
        student => student.year === "Fourth Year"
    ).length;


    // TOTAL

    const totalParticipants =
        document.getElementById("totalParticipants");

    if (totalParticipants) {
        totalParticipants.textContent = total;
    }


    // PAID

    const totalPaid =
        document.getElementById("totalPaid");

    if (totalPaid) {
        totalPaid.textContent = paid;
    }


    // UNPAID

    const totalUnpaid =
        document.getElementById("totalUnpaid");

    if (totalUnpaid) {
        totalUnpaid.textContent = unpaid;
    }


    // FOOTER TOTAL

    const footerTotal =
        document.getElementById("footerTotal");

    if (footerTotal) {
        footerTotal.textContent = total;
    }


    // FIRST YEAR

    const firstCount =
        document.getElementById("firstCount");

    if (firstCount) {
        firstCount.textContent = firstYear;
    }


    // SECOND YEAR

    const secondCount =
        document.getElementById("secondCount");

    if (secondCount) {
        secondCount.textContent = secondYear;
    }


    // THIRD YEAR

    const thirdCount =
        document.getElementById("thirdCount");

    if (thirdCount) {
        thirdCount.textContent = thirdYear;
    }


    // FOURTH YEAR

    const fourthCount =
        document.getElementById("fourthCount");

    if (fourthCount) {
        fourthCount.textContent = fourthYear;
    }


    // ALL

    const allCount =
        document.getElementById("allCount");

    if (allCount) {
        allCount.textContent = total;
    }
}


// =========================================================
// YEAR FILTER BUTTONS
// =========================================================

function setupYearButtons() {

    const yearButtons =
        document.querySelectorAll(".year-card");

    yearButtons.forEach(button => {

        button.addEventListener("click", () => {

            const year =
                button.dataset.year;

            selectedYear = year || "All";


            // Remove active class
            yearButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            // Add active class
            button.classList.add("active");


            updateParticipants();

        });

    });
}


// =========================================================
// SEARCH
// =========================================================

function setupSearch() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        updateParticipants
    );
}


// =========================================================
// PAYMENT FILTER
// =========================================================

function setupPaymentFilter() {

    const paymentFilter =
        document.getElementById("paymentFilter");

    if (!paymentFilter) return;

    paymentFilter.addEventListener(
        "change",
        updateParticipants
    );
}


// =========================================================
// GENDER FILTER
// =========================================================

function setupGenderFilter() {

    const genderFilter =
        document.getElementById("genderFilter");

    if (!genderFilter) return;

    genderFilter.addEventListener(
        "change",
        updateParticipants
    );
}


// =========================================================
// RESET FILTERS
// =========================================================

function resetFilters() {

    const searchInput =
        document.getElementById("searchInput");

    const paymentFilter =
        document.getElementById("paymentFilter");

    const genderFilter =
        document.getElementById("genderFilter");


    if (searchInput) {
        searchInput.value = "";
    }

    if (paymentFilter) {
        paymentFilter.value = "all";
    }

    if (genderFilter) {
        genderFilter.value = "all";
    }


    selectedYear = "All";


    document
        .querySelectorAll(".year-card")
        .forEach(button => {

            button.classList.remove("active");

            if (
                button.dataset.year === "All"
            ) {
                button.classList.add("active");
            }

        });


    updateParticipants();
}


// =========================================================
// MAKE RESET FUNCTION AVAILABLE GLOBALLY
// =========================================================

window.resetFilters = resetFilters;


// =========================================================
// CONSOLE INFORMATION
// =========================================================

function showConsoleSummary() {

    console.log(
        "===================================="
    );

    console.log(
        "IT OLYMPIAD 2026 PARTICIPANT LIST"
    );

    console.log(
        "===================================="
    );

    console.log(
        "Total Participants:",
        participants.length
    );

    console.log(
        "Paid:",
        participants.filter(p => p.paid).length
    );

    console.log(
        "Unpaid:",
        participants.filter(p => !p.paid).length
    );

    console.log(
        "------------------------------------"
    );

    console.log(
        "First Year:",
        participants.filter(
            p => p.year === "First Year"
        ).length
    );

    console.log(
        "Second Year:",
        participants.filter(
            p => p.year === "Second Year"
        ).length
    );

    console.log(
        "Third Year:",
        participants.filter(
            p => p.year === "Third Year"
        ).length
    );

    console.log(
        "Fourth Year:",
        participants.filter(
            p => p.year === "Fourth Year"
        ).length
    );

    console.log(
        "===================================="
    );
}


// =========================================================
// INITIALIZE WEBSITE
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    updateStatistics();

    setupYearButtons();

    setupSearch();

    setupPaymentFilter();

    setupGenderFilter();

    updateParticipants();

    showConsoleSummary();

});