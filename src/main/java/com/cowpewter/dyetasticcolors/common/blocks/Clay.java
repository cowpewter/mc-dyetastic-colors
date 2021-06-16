package com.cowpewter.dyetasticcolors.common.blocks;

import com.cowpewter.dyetasticcolors.common.utils.Color;
import net.minecraft.block.AbstractBlock;
import net.minecraft.block.SoundType;
import net.minecraft.block.material.Material;
import net.minecraft.block.material.MaterialColor;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;
import net.minecraftforge.common.ToolType;
import java.util.ArrayList;

public class Clay extends NamedBlock {
  public Clay(String name, MaterialColor color) {
    super(name, Clay.createBlockProps(color));
    this.setItemProperties(new Item.Properties().tab(ItemGroup.TAB_BUILDING_BLOCKS));
  }

  public static ArrayList<INamedBlock> generateAllColors() {
    ArrayList<INamedBlock> blocks = new ArrayList<INamedBlock>();

    String[] allColors = Color.getAllColorNames();
    for (String color : allColors) {
      blocks.add(new Clay(color + "_clay", Color.getMaterialForColor(color, false)));
    }

    return blocks;
  }

  private static AbstractBlock.Properties createBlockProps(MaterialColor color) {
    return AbstractBlock.Properties
      .of(Material.CLAY, color)
      .harvestTool(ToolType.SHOVEL)
      .harvestLevel(0)
      .strength(0.6F, 0.6F)
      .sound(SoundType.GRAVEL);
  }
}
