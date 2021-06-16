package com.cowpewter.dyetasticcolors.common.items;

import java.util.ArrayList;

import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;

public class Items {
  public static NamedItem[] getItems() {
    ArrayList<NamedItem> itemList = new ArrayList<NamedItem>();

    // Dye Modifiers
    itemList.add(new NamedItem("color_intensifier", new Item.Properties().tab(ItemGroup.TAB_MATERIALS)));
    itemList.add(new NamedItem("color_fader", new Item.Properties().tab(ItemGroup.TAB_MATERIALS)));

    // Dyes
    itemList.addAll(Dye.generateAllColors());

    // Clay Balls
    itemList.addAll(ClayBall.generateAllColors());

    // Bricks
    itemList.addAll(Brick.generateAllColors());

    return itemList.stream().toArray(NamedItem[]::new);
  }
}
