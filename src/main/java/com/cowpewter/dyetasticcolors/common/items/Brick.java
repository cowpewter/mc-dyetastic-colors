package com.cowpewter.dyetasticcolors.common.items;

import com.cowpewter.dyetasticcolors.common.utils.Color;
import java.util.ArrayList;

import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;

public class Brick extends NamedItem {
  public Brick(String name, Item.Properties props) {
    super(name, props);
  }

  public static ArrayList<NamedItem> generateAllColors() {
    ArrayList<NamedItem> items = new ArrayList<NamedItem>();

    String[] allColors = Color.getAllColorNames();
    for (String color : allColors) {
      items.add(new Brick(color + "_brick", new Item.Properties().tab(ItemGroup.TAB_MATERIALS)));
    }

    return items;
  }
}
