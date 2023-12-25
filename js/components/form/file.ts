document.addEventListener("DOMContentLoaded", () => {

    for (let i = 1; i <= 5; i++) { // сюда будем помещать drug-&-drop файлы (5)
        window["uploadDragFiles_" + i] = new Object();
    }

    document.querySelectorAll(".upload-file__wrapper").forEach(function (current_item, index) {

        const inputFile = current_item.querySelector(".upload-file__input");
        let fileList = [];
        let textSelector = current_item.querySelector(".upload-file__list");

        inputFile.addEventListener("change", function () {
            fileList.push(...inputFile.files);
            fileList.forEach(file => {
                uploadFile(file);
            });
        });

        const uploadFile = (file) => {
            if (file.size > 5 * 1024 * 1024) {
                alert("Файл должен быть не более 5 МБ.");
                return;
            }

            if (file && fileList.length >= 1) {
                fileList.forEach((item) => {
                    let fileNameAdded = document.createElement("div");
                    fileNameAdded.classList.add('upload-file__item');
                    fileNameAdded.innerHTML = item.name;
                    textSelector.append(fileNameAdded);

                })
            }
            fileList = [];
        }

        const dropZone = current_item.querySelector(".upload-file__label");
        const dropZoneText = current_item.querySelector(".upload-file__list");
        const maxFileSize = 5000000;

        // Проверка поддержки «Drag-and-drop»
        if (typeof (window.FileReader) == "undefined") {
            dropZone.textContent = "Drag&Drop Не поддерживается браузером!";
            dropZone.classList.add("error");
        }
        // Событие - перетаскивания файла
        dropZone.ondragover = function () {
            this.classList.add("hover");
            return false;
        };
        // Событие - отмена перетаскивания файла
        dropZone.ondragleave = function () {
            this.classList.remove("hover");
            return false;
        };
        // Событие - файл перетащили
        dropZone.addEventListener("drop", function (e) {
            e.preventDefault();
            this.classList.remove("hover");
            this.classList.add("drop");

            uploadDragFiles = e.dataTransfer.files[0]; // один файл

            // Проверка размера файла
            if (uploadDragFiles.size > maxFileSize) {
                dropZoneText.textContent = "Размер превышает допустимое значение!";
                this.addClass("error");
                return false;
            }

            // Показ загружаемых файлов
            if (uploadDragFiles.length > 1) {
                console.log(uploadDragFiles);

                if (uploadDragFiles.length <= 5) {
                    dropZoneText.textContent = `Выбрано ${uploadDragFiles.length} файла`;
                } else {
                    dropZoneText.textContent = `Выбрано ${uploadDragFiles.length} файлов`;
                }
            } else {
                dropZoneText.textContent = e.dataTransfer.files[0].name;
            }

            // добавляем файл в объект "uploadDragFiles_i"
            window["uploadDragFiles_" + index] = uploadDragFiles;
        });

    });
});