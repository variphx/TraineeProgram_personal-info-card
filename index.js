import { minh_tien } from "./card_infos/minh_tien.js";
import { quynh_nhu } from "./card_infos/quynh_nhu.js";
import { dinh_khoi } from "./card_infos/dinh_khoi.js";
import { an } from "./card_infos/an.js";
import { sang } from "./card_infos/sang.js";
import { anh_dung } from "./card_infos/anh_dung.js";
import { hoang_minh } from "./card_infos/hoang_minh.js";
import { thanh_tam } from "./card_infos/thanh_tam.js";
import { dang_khoa } from "./card_infos/dang_khoa.js";

const infos = [
    minh_tien,
    quynh_nhu,
    dinh_khoi,
    an,
    sang,
    anh_dung,
    hoang_minh,
    thanh_tam,
    dang_khoa
];

let i = 0;
const infos_len = infos.length;

const change_infos = (index) => {
    document.querySelector("#card").innerHTML = infos[index];
}

change_infos(0);

document.querySelector("#left-button").addEventListener("click", () => {
    if (i == 0) {
        i = infos_len - 1;
    } else {
        i -= 1;
    }
    change_infos(i);
})

document.querySelector("#right-button").addEventListener("click", () => {
    i = (i + 1) % infos_len;
    change_infos(i);
})


