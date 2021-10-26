<script>
  

  let idBeca = "";
  let dailyEnergy = 20;

  let counter = false;
  let gameEnd = false;
  let matchAdd = false  


  let curEnergy = 3;
  let curCards = 6;
  let round = 1

  let mainScreen =  true


  // Energias
  const addEnergy = () => (curEnergy += 1);
  const remEnergy = () => (curEnergy -= 1);

  // Cartas
  const addCard = () => (curCards += 1);
  const remCard = () => (curCards -= 1);

  // Turno y partida
  const newGame = () => {
    mainScreen = false
    curEnergy = 3;
    curCards = 6;
    counter = true;
    
  };

  const endGame = () => gameEnd = true

  const endTurn = () => {
    curEnergy += 2;
    curCards += 3;
	  round += 1;
  };

  // Calculadora SLP
  let slpPoints = false;
  let slpTotal = 0;

  let dailyCheck = false
  let advCheck = false

  let dailyQuest = () => (slpTotal += 25);
  let aventura = () => (slpTotal += 50);

  let points = [1, 3, 6, 9, 12, 15, 18];

  let slpWon = () => slpPoints = true;
  let slpLost = () => {
    matchAdd = true
    dailyEnergy -= 1
    gameAdd();
  }

  const gameAdd = () => {
    
   setTimeout(() => {
     matchAdd = false
   }, 1500);
    resetCalc();
    gameEnd = false
    slpPoints = false

  }

  const handlePoints = (e) => {
    let curWin = parseInt(e.currentTarget.id);
    slpTotal += curWin;
    dailyEnergy -= 1
    matchAdd = true
    gameAdd()
  };

//   Resetear a valores por defecto
const resetCalc = () => {
    round = 1
	  curEnergy = 3
	  curCards = 6
}  

const resetAll = () => {       
    resetCalc()
	  dailyEnergy = 20
	  dailyCheck = false
	  advCheck = false
	  slpTotal = 0
  }


</script>


<div class="container pt-6 font-fredoka">
  <div class="place-items-center 2xl:col-span-5 mb-2">  <!-- Cabecera -->
	 	<h1 class="font-black mt-2 text-7xl text-gray-200 tracking-wider text-center" on:click={() => {mainScreen = true}}>Academia Axie<br /> NFT GO!</h1>
   	<h3 class="text-gray-200 text-4xl text-center underline">Kit para Becados</h3>
  </div>  <!-- Fin cabecera-->
  
  <section class="sect">  <!-- Seccion principal-->
    {#if mainScreen}

      <button class="main-opt font-secular text-4xl
        2xl:justify-self-start 2xl:self-center 
        2xl:col-start-1 2xl:col-end-2
        2xl:row-start-2 2xl:row-end-3" on:click={newGame}>Mi Beca</button>
        

      <button class="main-opt font-secular text-4xl
        2xl:relative 2xl:right-1 
        2xl:justify-self-center 2xl:self-start 
        2xl:row-start-1 2xl:row-end-2 
        2xl:col-start-3 2xl:col-end-4" on:click={newGame}>Nueva Partida</button>
      

      <button class="main-opt font-secular text-2xl
        items-center justify-center 
        2xl:justify-self-end 2xl:self-center 
        2xl:row-start-2 2xl:row-end-3 
        2xl:col-start-5 2xl:col-end-6" on:click={newGame}>Información del Juego</button>
      
      <button class="main-opt font-secular text-4xl
        2xl:relative 2xl:right-1 
        2xl:justify-self-center 2xl:self-end 
        2xl:row-start-3 2xl:row-end-4 
        2xl:col-start-3 2xl:col-end-4" on:click={newGame}>NFT GO!</button>
    {/if}
    {#if counter}
      <div class="ng-card overflow-hidden justify-center items-center rounded-2xl px-2 2xl:px-8 py-8 space-y-4 text-coolGray-200 flex flex-col 2xl:col-start-2 2xl:col-end-5  2xl:row-start-2">
        <p class="font-bold text-2xl mt-4 text-center">Ronda actual: <span class="text-gray-200 font-extrabold">{round}</span></p>
        <div class="energias space-x-2">
          <p class="text-4xl font-bold">Energía del rival</p>
          <div class="flex items-center justify-center space-x-4">  
           <button class="w-7 h-7 p-2 flex items-center justify-center rounded bg-red-600 ring-2 ring-white" disabled={curEnergy <= 0} on:click={remEnergy}>-1</button>
           <span class="text-gray-200 text-6xl">{curEnergy}</span>
           <button class="w-7 h-7 p-2 flex items-center justify-center rounded bg-green-600 ring-2 ring-white" on:click={addEnergy}>+1</button>
          </div>  
        </div>	
        <div class="cartas space-x-2 space-y-1"> 
          <p class="text-4xl font-bold">Cartas del rival</p>
          <div class="flex items-center justify-center space-x-4">
            <button class="w-7 h-7 p-2 flex items-center justify-center rounded bg-red-600 ring-2 ring-white" disabled={curCards <= 0} on:click={remCard}>-1</button>
            <span class="text-gray-200 text-6xl">{curCards}</span>
            <button class="w-7 h-7 p-2 flex items-center justify-center rounded bg-green-600 ring-2 ring-white" on:click={addCard}>+1</button>
          </div>  
        </div>	
        <button class="h-7 p-2 flex items-center justify-center rounded bg-red-600 ring-2 ring-white" on:click={resetAll}>Resetear</button>
        <button class="h-7 p-2 flex items-center justify-center rounded bg-sky-700 ring-2 ring-white" on:click={endTurn}> Finalizar Turno </button>
        <button class="h-7 p-2 flex items-center justify-center rounded bg-sky-700 ring-2 ring-white" on:click={endGame}> Finalizar Partida </button>
        {#if gameEnd}
          <div class="flex items-center justify-center space-x-4">
            <button class="h-7 p-2 flex items-center justify-center rounded bg-red-600 ring-2 ring-white" on:click={slpLost} disabled={dailyEnergy == 0}>Derrota</button> 
            <button class="h-7 p-2 flex items-center justify-center rounded bg-green-600 ring-2 ring-white" on:click={slpWon} disabled={dailyEnergy == 0}>Victoria</button>
          </div>
          {#if slpPoints}           
                <!-- /* por cada elemento de x array, hacer a2xlo con este elemento */ -->
              <div class="flex flex-row items-center justify-center space-x-4"> 
                {#each points as point}
                <button class="rounded p-2 bg-sky-700 hover:bg-sky-500 ring-2 ring-white" id={point} on:click={handlePoints}>+{point}</button>
                {/each}
              </div>               
          {/if}                   
        {/if}
        
        <div class="rounded flex flex-col p-2 items-center justify-center bg-purple-900 ring-2 ring-white">
          <p class="text-center">SLP Diarios: <span class="text-orange-600 font-extrabold">{slpTotal}</span></p>
          <label>Daily Quest (+25) <input type="checkbox" disabled={dailyCheck} bind:checked={dailyCheck} on:input={dailyQuest}/></label>
          <label>Aventura 50/50 <input type="checkbox" disabled={advCheck} bind:checked={advCheck} on:input={aventura} /></label>
        </div> 
        <p class="h-7 p-2 flex items-center justify-center rounded bg-purple-900 ring-2 ring-white">Energias restantes: {dailyEnergy}/20 ⚡</p>
        {#if matchAdd}
          <p class="rounded p-2 text-center text-emerald-600">Partida registrada correctamente!</p>
        {/if}
        </div>
    {/if}
  </section> <!--Fin seccion principal --> 
  <footer class="bg-gray-800 footer 2xl:mt-20 2xl:col-span-5 2xl:row-start-5 2xl:row-end-6">
  </footer>
</div>
