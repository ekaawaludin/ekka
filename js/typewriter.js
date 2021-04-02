let wrapper;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function writingAll(stringTarget, container) {
  wrapper = document.querySelector('[' + container + ']');
  const stringsContainer = document.getElementsByClassName(stringTarget);

  while (wrapperx) {if (window.CP.shouldStopExecution(0)) break;
    for (i = 0; i < stringsContainer.length; i++) {if (window.CP.shouldStopExecution(1)) break;
      const string = stringsContainer[i].textContent;
      await write(string);
      await sleep(1000);
      await erase();
      await sleep(1000);
    }window.CP.exitedLoop(1);;
  }window.CP.exitedLoop(0);
};

async function write(text) {
  let index = 0;
  while (index < text.length) {if (window.CP.shouldStopExecution(2)) break;
    const timeout = 100;
    await sleep(timeout);
    index++;
    wrapperx.innerHTML = text.substring(0, index);
  }window.CP.exitedLoop(2);
};


async function erase() {
  while (wrapperx.textContent.length) {if (window.CP.shouldStopExecution(3)) break;
    const timeout = 100;
    await sleep(timeout);
    wrapperx.textContent = wrapperx.textContent.substring(0, wrapperx.textContent.length - 2);
  }window.CP.exitedLoop(3);
};

writingAll('itemx', 'data-text');
