import { forEach } from 'lodash-es';
import { loadYmap } from 'vue-yandex-maps';

document.addEventListener('DOMContentLoaded', () => {
    const maps = document.querySelectorAll('.js-ymap');
    if (maps.length > 0) {

        const selectCity = document.querySelector(
            '.js-ymap-city-change'
        ) as HTMLSelectElement;
        const cityIndex = selectCity?.value || 0;

        maps.forEach((mapBlock) => {
            const mapInit = async () => {
                await loadYmap({
                    apiKey: mapBlock.getAttribute('data-api-key'),
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    enterprise: false,
                    version: '2.1',
                });

                const pin = mapBlock.getAttribute('data-pin');
                const myMap = new ymaps.Map(mapBlock.getAttribute('id'), {
                    center: [55.771145, 37.620177],
                    zoom: 14,
                    controls: ['smallMapDefaultSet'],
                });
                // myMap.behaviors.disable('scrollZoom');

                const areas = mapBlock.querySelectorAll('.ymap__area');
                const jsShopMap = document.querySelectorAll('.js-shop-map');


                if (areas.length > 0) {
                    const showGeoObjects = () => {
                        myMap.geoObjects.removeAll();

                        const ans: any[] = [];
                        const extendedResult: any[] = [];

                        areas.forEach((area: any, index) => {
                            const items = area.querySelectorAll('.ymap__item');
                            const myGeoObjects: any[] = [];

                            areas.forEach((area: any, index) => {
                                const items = area.querySelectorAll('.ymap__item');
                                const myGeoObjects: any[] = [];

                                items.forEach((item: any) => {
                                    const coordinates = item
                                        .getAttribute('data-coordinates')
                                        .split(',');
                                    myGeoObjects.push({
                                        type: 'Feature',
                                        geometry: {
                                            type: 'Point',
                                            coordinates,
                                        },
                                        options: {
                                            iconLayout: 'default#image',
                                            iconImageHref: pin,
                                            iconImageSize: [25, 25],
                                            iconImageOffset: [-13, -36],
                                            hasHint: true,
                                        },
                                        properties: {
                                            clusterCaption:
                                                item.getAttribute('data-name'),
                                            balloonContentBody: item.innerHTML,
                                            hintContent:
                                                item.getAttribute('data-name'),
                                        },
                                    });
                                });

                                ans[
                                    index
                                ] = `{"type": "FeatureCollection", "features": ${JSON.stringify(
                                    myGeoObjects
                                )}}`;

                                const result = ymaps.geoQuery(myMap.geoObjects);
                                extendedResult[index] = result.add(ans[index]);
                                const clusterer = extendedResult[index]
                                    .search('geometry.type == "Point"')
                                    .clusterize({
                                        gridSize: 50,
                                        minClusterSize: 2,
                                        clusterIconColor: '#000000',
                                        zoomMargin: 50,
                                    });
                                myMap.geoObjects.add(clusterer);
                            });
                        });

                        jsShopMap.forEach((market) => {
                            market.addEventListener('click', () => {
                                const count = market.getAttribute('data-active');
                                jsShopMap.forEach((market) => {
                                    market.classList.remove('active');
                                });
                                market.classList.add('active');

                                items.forEach((item: any) => {
                                    item.classList.remove('active');
                                    if (count === item.getAttribute('data-index')) {
                                        item.classList.add('active');
                                        let pinCount = Number(item.getAttribute('data-index'));

                                        myMap.panTo([
                                            extendedResult[cityIndex]._objects[pinCount].geometry._coordinates,
                                        ]);
                                    }
                                });
                            });

                        });
                    };

                    showGeoObjects();
                }
            };
            mapInit();
        });
    }
});

