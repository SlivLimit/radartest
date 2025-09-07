(function() {
    // Инициализация обработчика команд
    function initializeCommandHandler() {
        const chatInput = document.querySelector('#app .radmir-chat-input__input input');
        if (!chatInput) {
            console.warn('Chat input not found. Command handler cannot initialize.');
            return;
        }

        chatInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const message = chatInput.value.trim();
                if (message === '/limitradar') {
                    event.preventDefault(); // Предотвращаем отправку команды на сервер
                    if (window.mazzx && window.mazzx.showRadarMenu) {
                        window.mazzx.showRadarMenu(); // Вызываем функцию показа меню радара
                        chatInput.value = ''; // Очищаем поле ввода
                        if (window.mazzx.addLabel) {
                            window.mazzx.addLabel('Меню радара открыто');
                        }
                    } else {
                        // Если основной скрипт не загружен, подгружаем его
                        loadMainScript(() => {
                            if (window.mazzx && window.mazzx.showRadarMenu) {
                                window.mazzx.showRadarMenu();
                                chatInput.value = '';
                                if (window.mazzx.addLabel) {
                                    window.mazzx.addLabel('Меню радара открыто');
                                }
                            } else {
                                console.error('Main script loaded but showRadarMenu not found.');
                            }
                        });
                    }
                }
            }
        });
    }

    // Функция для динамической подгрузки основного скрипта
    function loadMainScript(callback) {
        const scriptUrl = 'https://raw.githubusercontent.com/YourRepo/YourPath/main/original%20(2).js'; // Замените на реальный URL основного скрипта
        const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
        if (existingScript) {
            callback(); // Скрипт уже загружен
            return;
        }

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.onload = callback;
        script.onerror = () => console.error('Failed to load main script: ' + scriptUrl);
        document.head.appendChild(script);
    }

    // Запускаем обработчик после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCommandHandler);
    } else {
        initializeCommandHandler();
    }
})();