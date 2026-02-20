#!/usr/bin/env python3
"""Download Brawl Stars portraits/maps into project folders.

Requires open internet access from your machine.
"""
from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BRAWLERS_DIR = ROOT / 'images' / 'brawlers_portrait'
MAPS_DIR = ROOT / 'images' / 'maps_official'

BRAWLERS_DIR.mkdir(parents=True, exist_ok=True)
MAPS_DIR.mkdir(parents=True, exist_ok=True)

MAPS = {
    'Dry Season', 'Hideout', 'Creme de la Creme', 'Shooting Star',
    'Super Stadium', 'Pinball Dreams', 'Backyard Bowl', 'Triple Dribble',
    'Hard Rock Mine', 'Crystal Arcade', 'Double Swoosh', 'Deathcap Trap',
    'Safe Zone', 'Kaboom Canyon', 'Hot Potato', 'Scorched Stone', 'Bridge Too Far',
    'Open Business', 'Dueling Beetles', 'Ring of Fire', 'Parallel Plays',
    'Goldarm Gulf', 'Toxic Swamp', 'Dark Dunes', 'Stone Fort',
}


def slugify_latin(value: str) -> str:
    return re.sub(r'[^a-z0-9]+', '_', value.lower()).strip('_')


def slugify(value: str) -> str:
    return re.sub(r'[^a-z0-9а-яё]+', '_', value.lower()).strip('_')


def read_json(url: str) -> dict:
    with urllib.request.urlopen(url, timeout=30) as response:
        return json.load(response)


def download(url: str, out: Path) -> None:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as response:
        out.write_bytes(response.read())


def main() -> None:
    print('Downloading brawlers...')
    brawlers = read_json('https://api.brawlapi.com/v1/brawlers').get('list', [])
    b_count = 0
    for b in brawlers:
        name = b.get('name')
        url = b.get('imageUrl2') or b.get('imageUrl')
        if not name or not url:
            continue
        out = BRAWLERS_DIR / f"{slugify_latin(name)}_portrait.png"
        try:
            download(url, out)
            b_count += 1
        except Exception as exc:
            print(f"[warn] brawler {name}: {exc}")

    print('Downloading maps...')
    maps = read_json('https://api.brawlapi.com/v1/maps').get('list', [])
    m_count = 0
    for m in maps:
        name = m.get('name')
        url = m.get('imageUrl')
        if not name or name not in MAPS or not url:
            continue
        out = MAPS_DIR / f"{slugify(name)}.png"
        if out.exists():
            continue
        try:
            download(url, out)
            m_count += 1
        except Exception as exc:
            print(f"[warn] map {name}: {exc}")

    print(f'Done. brawlers={b_count}, maps={m_count}')


if __name__ == '__main__':
    main()
