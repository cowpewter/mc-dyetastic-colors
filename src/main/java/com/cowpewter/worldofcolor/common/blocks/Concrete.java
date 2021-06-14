package com.cowpewter.worldofcolor.common.blocks;

import com.cowpewter.worldofcolor.common.utils.Color;
import net.minecraft.block.AbstractBlock;
import net.minecraft.block.material.Material;
import net.minecraft.block.material.MaterialColor;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;

import java.util.ArrayList;

public class Concrete extends NamedBlock {
  public Concrete(String name, MaterialColor color) {
    super(name, AbstractBlock.Properties.of(Material.STONE, color));
    this.setItemProperties(new Item.Properties().tab(ItemGroup.TAB_BUILDING_BLOCKS));
  }

  public static ArrayList<INamedBlock> generateAllColors() {
    ArrayList<INamedBlock> blocks = new ArrayList<INamedBlock>();

    String[] allColors = Color.getAllNewColorNames();
    for (String color : allColors) {
      blocks.add(new Concrete(color + "_concrete", Color.getMaterialForColor(color)));
    }

    return blocks;
  }
}
