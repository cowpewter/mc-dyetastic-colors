
package net.mcreator.cowpewterworldofcolor.item;

import net.minecraftforge.registries.ObjectHolder;

import net.minecraft.world.World;
import net.minecraft.util.text.StringTextComponent;
import net.minecraft.util.text.ITextComponent;
import net.minecraft.item.Rarity;
import net.minecraft.item.ItemStack;
import net.minecraft.item.Item;
import net.minecraft.client.util.ITooltipFlag;
import net.minecraft.block.BlockState;

import net.mcreator.cowpewterworldofcolor.CowpewterWorldOfColorModElements;

import java.util.List;

@CowpewterWorldOfColorModElements.ModElement.Tag
public class DarkestLimeDyeItem extends CowpewterWorldOfColorModElements.ModElement {
	@ObjectHolder("cowpewter_world_of_color:darkest_lime_dye")
	public static final Item block = null;
	public DarkestLimeDyeItem(CowpewterWorldOfColorModElements instance) {
		super(instance, 209);
	}

	@Override
	public void initElements() {
		elements.items.add(() -> new ItemCustom());
	}
	public static class ItemCustom extends Item {
		public ItemCustom() {
			super(new Item.Properties().group(null).maxStackSize(64).rarity(Rarity.COMMON));
			setRegistryName("darkest_lime_dye");
		}

		@Override
		public int getItemEnchantability() {
			return 0;
		}

		@Override
		public int getUseDuration(ItemStack itemstack) {
			return 0;
		}

		@Override
		public float getDestroySpeed(ItemStack par1ItemStack, BlockState par2Block) {
			return 1F;
		}

		@Override
		public void addInformation(ItemStack itemstack, World world, List<ITextComponent> list, ITooltipFlag flag) {
			super.addInformation(itemstack, world, list, flag);
			list.add(new StringTextComponent("Used to color items Darkest Lime."));
		}
	}
}
