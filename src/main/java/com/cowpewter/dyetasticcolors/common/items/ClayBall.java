package com.cowpewter.dyetasticcolors.common.items;

import com.cowpewter.dyetasticcolors.common.utils.Color;
import java.util.ArrayList;

import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;

public class ClayBall extends NamedItem {
  public ClayBall(String name, Item.Properties props) {
    super(name, props);
  }

  public static ArrayList<NamedItem> generateAllColors() {
    ArrayList<NamedItem> items = new ArrayList<NamedItem>();

    String[] allColors = Color.getAllColorNames();
    for (String color : allColors) {
      items.add(new ClayBall(color + "_clay_ball", new Item.Properties().tab(ItemGroup.TAB_MATERIALS)));
    }

    return items;
  }
}
