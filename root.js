var v = document.getElementById('main');
async function api(){

    const url = 'https://bing-news-search1.p.rapidapi.com/news?count=20&cc=in&originalImg=true&textDecorations=true&safeSearch=Off&textFormat=Raw';
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '13fc5fecf1msh32c2ee6d06787cep169888jsn10eac491acd5',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    
    
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
       
   
   for(i=0; i<12; i++){ 
    if(data.value[i].image!== undefined){
        img = data.value[i].image.thumbnail.contentUrl;
    }else{
        img="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";
    }
        v.innerHTML += `  <div class="mb-6 flex flex-wrap">
        <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init data-te-ripple-color="light">
            <img src="${img}" class="w-full" alt="Louvre" />
            <a href="${data.value[i].url}">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </a>
          </div>
        </div>
       
        <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <a href="${data.value[i].url}"> <h5 class="mb-3 text-lg font-bold">${data.value[i].name}</h5>
        </a>
          <p class="mb-6 text-neutral-900">
            <small>Published <u>${data.value[i].provider[0].name}</u> 
              
          </p>
          <a href="${data.value[i].url}">
          <p class="text-neutral-900 ">
            ${data.value[i].description}
          </p></a>
        </div>
      </div>`;
    }
    }


api();
